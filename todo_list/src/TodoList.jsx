import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const Todo = function(){
    let [Todos,setTodos] = useState([])
    function AddNewTask(){
        const getTaskName = document.querySelector("#TaskName");    
        //getTaskName.value
        setTodos(
            [...Todos,
            {
                id:uuidv4(),
                task:getTaskName.value, 
                isDone:false
            }])
    }

    const DeleteTask = (removeKey) =>{
        const NewCopy = Todos.filter((todo)=>todo.id != removeKey)
        //console.log(NewCopy);
        setTodos([...NewCopy])
    }
    const HandleTaskDone = (TaskId) =>{
        let UpdatetaskList = Todos.map((todo)=>{
            if(todo.id == TaskId){
                return {
                    ...todo,
                    isDone: true
                }
            }else{
                return {
                    ...todo
                }
            }
        })
        //console.log(UpdatetaskList);
        setTodos([...UpdatetaskList])
    }
    const MarkAllDone = () =>{
        let UpdatetaskList = Todos.map((todo)=>{
            return {
                ...todo,
                isDone: true
            }
        })
        setTodos([...UpdatetaskList])
    }

    const AlltaskUppercase = () =>{
        let UpdatetaskList = Todos.map((todo)=>{
            return {
                ...todo,
                task:todo.task.toUpperCase()
            }
        })
        setTodos([...UpdatetaskList])
    }

    const MakeUpperCase = (getId)=>{
        let UpdatetaskList = Todos.map((todo)=>{
            if(todo.id == getId){
                return {
                    ...todo,
                    task:todo.task.toUpperCase()
                }
            }else{
                return {
                    ...todo
                }
            }            
        })
        setTodos([...UpdatetaskList])
    }
    
    return(
        <>
            <h2>Toto List example</h2>
            <input type="text" placeholder="Enter Task" id="TaskName" style={{height:"35px", width:"200px", marginRight:"10px"}}/>
            <button onClick={AddNewTask}>Add Task</button>            
            <hr />
            <ul>
            {
            Todos && Todos.map((todo) => (
                <li key={todo.id} >
                    <span style={ todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>
                    &nbsp;  &nbsp;
                    <button onClick={()=>DeleteTask(todo.id)}>Delete Task</button>
                    &nbsp;  &nbsp;
                    <button onClick={()=>HandleTaskDone(todo.id)}>Mark As Done</button>
                    &nbsp;  &nbsp;
                    <button onClick={()=>MakeUpperCase(todo.id)}>Make UpperCase</button>
                </li>
            ))
            }
            </ul> 
            <button onClick={MarkAllDone}>Mark As All Done</button>&nbsp;  &nbsp;           
            <button onClick={AlltaskUppercase}>All Task Uppercase</button>           
        </>
    )
}