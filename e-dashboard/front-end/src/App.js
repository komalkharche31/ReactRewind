import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Nav from './Component/nav';
import Footer from './Component/Footer';
import SignUp from './Component/SingUp';
import PrivateRoutes from './Component/PrivateRoutes';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct'
import ProductList from './Component/ProductList'
import UpdateProduct from './Component/UpdateProduct';
function App() {
  return (    
    <div className="App">
      <BrowserRouter>  
        <Nav />       
        <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route path="/" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/update/:id" element={<UpdateProduct />} />             
              <Route path="/profile" element={<h1>Profile</h1>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
