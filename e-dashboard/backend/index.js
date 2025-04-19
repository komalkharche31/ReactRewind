const express = require('express');
const cors = require("cors")
require('./db/config')
const verifyToken = require("./middleware/auth");
//const {signToken} = require('./utils/JwtSign')
const User = require('./model/User')
const Product = require('./model/Product')
const app = express();
app.use(express.json())
app.use(cors())

const Jwt = require('jsonwebtoken')
const secretkey = "komalkahrche"


app.post('/register',async(req,resp)=>{
    
    let UserCreate = await User.create(req.body)   
    UserCreate = UserCreate.toObject() 
    if(UserCreate){
        delete UserCreate.password;
        Jwt.sign({UserCreate},secretkey,{ expiresIn: "2h" },(err,token)=>{
            if(err){
                resp.send({
                    status : "fail",
                    message:"something went wrong",
                    result: []
                })
            }else{
                resp.send({
                    status : "success",
                    message:"Record Successfully found",
                    token:token,
                    result: UserCreate
                })
            }
        });
    }else{
        resp.send(UserCreate)
    }
})


app.post('/login',async(req,resp)=>{    
    if(req.body.email && req.body.password){
        let UserExits = await User.findOne(req.body).select("-password")   
        if(UserExits){          
             Jwt.sign({UserExits},secretkey,{ expiresIn: "2h" },(err,token)=>{
                if(err){
                    resp.send({
                        status : "fail",
                        message:"Authentication Fail due to token not verify",
                        result: []
                    })
                }else{
                    resp.send({
                        status : "success",
                        message:"Record Successfully found",
                        token:token,
                        result: UserExits
                    })
                }

            }) 
           
        } else{           
            resp.send( {
                status : "fail",
                message:"Record not found",
                result: UserExits
            })
        }
    }else{
        resp.send({result:"Invalid request"})
    }
})

app.post('/add-product',verifyToken, async(req,resp)=>{

    const CreateProduct = await Product.create(req.body)
    resp.send(CreateProduct)
})

app.get('/products', verifyToken, async(req,resp)=>{
    //const getProduct = await Product.find({category:"Cotton"}).sort({ price: -1 }); 
    /*const getProduct = await Product.find({
        category:"Cotton",
        price: { $gte: 200 },
        name: { $regex: "Product",$options: "i"} // $options: "i"  for casesensitive
    }).sort({ price: -1 }).select('name _id') // Only select product name and id
    .populate('userId', 'name email _id'); // Only select user name, email, and id
    */
    const getProduct = await Product.find(); 
    if(getProduct){
        resp.send({
            status : "success",
            message:"Record found",
            result: getProduct
        })
    } else{           
        resp.send( {
            status : "fail",
            message:"Record not found",
            result: getProduct
        })
    }
})

app.get('/user/:id',verifyToken, async(req,res)=>{
    try {
        console.log(req.params.id);
        const userData = await User.findById(req.params.id)
          .populate('products') // ✅ virtual field populated
          .select('-password'); // Exclude password    
        res.json(userData);
      } catch (err) {
        res.status(500).json({ error: 'Something went wrong' ,id:req.params.id});
      }
})

app.delete('/product/:id', verifyToken,  async(req,res)=>{
    try {
        console.log(req.params.id);
        const DelProduct = await Product.deleteOne({_id:req.params.id})
        res.json(DelProduct);
      } catch (err) {
        res.status(500).json({ error: 'Something went wrong' ,id:req.params.id});
      }
})


app.get('/product/:id', verifyToken, async(req,res)=>{
    try {
        const getProduct = await Product.findOne({_id:req.params.id})
        res.status(200).json(getProduct);
      } catch (err) {
        res.status(500).json({ error: 'Something went wrong'});
      }
})

app.put('/update_product',verifyToken, async(req,resp)=>{ 
    const productId =  req.body._id;
    delete req.body._id;
    if(req.body.name && req.body.category){
        let ProductUpdate = await Product.findByIdAndUpdate(
            productId,  //condition
            req.body, //updated Value
            {new:true}
        ) 
        console.log(req.body)
        if(ProductUpdate){
            resp.send({
                status : "success",
                message:"Record updated",
                result: ProductUpdate
            })
        } else{           
            resp.send( {
                status : "fail",
                message:"Record not Updated. try again",
                result: ProductUpdate
            })
        }
    }else{
        resp.send({result:"Invalid request"})
    }
})

app.get('/search/:key', verifyToken , async(req,resp)=>{ 
    const key =  req.params.key;
        let SearchProduct = await Product.find({
            $or:[
                { name:{$regex : key, $options : "i"} },
                { category:{$regex : key, $options : "i"} },
                { company:{$regex : key, $options : "i"}  }
            ]
        }) 
        console.log(SearchProduct)
        if(SearchProduct){
            resp.send({
                status : "success",
                message:"Record found",
                result: SearchProduct
            })
        } else{           
            resp.send( {
                status : "fail",
                message:"Record not found. try again",
                result: SearchProduct
            })
        }    
})


app.get('/',(req,res)=>{
    //console.log(`App is running`);
    res.send(`App is running...`)
   
});

app.listen(5000)