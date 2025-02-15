import React,{useState} from 'react'
function ToDoList(){
    const[tasks,setTasks]=useState([])
    const[newTask,setNewTask]=useState("")
    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if( newTask.trim()!=""){
          setTasks(t=>[...tasks,newTask]);
        setNewTask("");  
        }
        
    
    }
    function deleteTask(index){
        const updateTask=tasks.filter((_,i)=>i!==index );
        setTasks(updateTask);


    }
    function moveTaskUp(index){
    if(index>0){
        const updateTask=[...tasks];
        [updateTask[index],updateTask[index-1]]
        =[updateTask[index-1],updateTask[index]];
        setTasks(updateTask);
    }
    }
    function moveTaskDown(index){

        if(index<tasks.length-1){
            const updateTask=[...tasks];
            [updateTask[index],updateTask[index+1]]
            =[updateTask[index+1],updateTask[index]];
            setTasks(updateTask);
        }

        
    }

    return(<div className="to-do-list">
    <h1>TO-Do-List</h1>
    <div>
      <input type="Text"
        placeholder='Enter a task' 
        value={newTask}
        onChange={handleInputChange}></input>
    <button className='add-button' 
     onClick={addTask}>Add</button>

     
    </div>
    <ol>
        {tasks.map((task,index)=>
        <li key={index}>
        <span className="text">{task}</span>
        <button className='delete-button'
         onClick={()=>deleteTask(index)}>
         Delete</button>
         <button className='move-button'
         onClick={()=>moveTaskUp(index)}>
      👆</button>
      <button className='move-button'
         onClick={()=>moveTaskDown(index)}>
      👇</button>


        </li>
        )}
    </ol>


    </div>

       
    );
}
export  default ToDoList