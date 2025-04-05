import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export function Todolist(){
    let [Todos, setTodos] = useState([{task:"Simple task", key:uuidv4(), isDone:false}])

   

    function AddNewTask() {
        const getTask = document.querySelector("#TodoName");       
        setTodos([
            ...Todos,
            {task:getTask.value, key:uuidv4() , isDone:false}
        ])
        document.querySelector('#TodoName').value = ''
    }
    function deleteList(key){
        let copy = Todos.filter((obj)=>obj.key != key)
        setTodos([...copy])
    }

    function doAllUperCase(){
        let newTodoCopy = Todos.map((prevTodo)=>{
               return {
                ...prevTodo,
                task:prevTodo.task.toUpperCase()
               }
        })
        setTodos([...newTodoCopy])       
    }

    function doOneUperCase(key){
        let newTodoCopy = Todos.map((prevTodo)=>{
            if(prevTodo.key == key){
                return {
                    ...prevTodo,
                    task:prevTodo.task.toUpperCase()
                    }
            }else{
                return prevTodo
            }
               
        })
        setTodos([...newTodoCopy])
    }

    
    function HandleMarkAsDone(key){
        let newTodoCopy = Todos.map((prevTodo)=>{
            if(prevTodo.key == key){
                return {
                    ...prevTodo,
                    isDone:true
                    }
            }else{
                return prevTodo
            }
               
        })
        setTodos([...newTodoCopy])
    }
    
    function AllMarkAsDone(){
        let newTodoCopy = Todos.map((prevTodo)=>{
               return {
                ...prevTodo,
                isDone:true
               }
        })
        setTodos([...newTodoCopy])       
    }

    return (
        <>
            <input type="text" placeholder="Enter tasks" id="TodoName" style={{height:"35px"}}/>
            <br />
            <br />
            <button onClick={AddNewTask}>Add</button>
            <hr />           
            <ul>
            {
               
                Todos.map((todo)=>(                   
                    <li key={todo.key} style={ todo.isDone ? {margin:"10px",textDecoration:"line-through"} : { margin:"10px" }}> {todo.task}
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <button onClick={()=>deleteList(todo.key)}>Delete</button>
                    &nbsp; &nbsp;
                    <button onClick={()=>doOneUperCase(todo.key)}>UpperCase Me</button>
                    &nbsp; &nbsp;
                    <button onClick={()=>HandleMarkAsDone(todo.key)}>Mark As Done</button>
                    </li> 
                ))
            }
            <br />
            <button onClick={doAllUperCase}>Create UpperCase</button>
            <button onClick={AllMarkAsDone}>All Mark As Done</button>
           

            </ul> 
        </>
    )
}