import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [todo,setTodo] = React.useState<any>([])
  const [dodo,setDodo] = React.useState<any>([])
  const [task,setTask] = React.useState<string>("") // task var setTask("nakul")
  const inputChange = function (e:any){
    setTask(e.target.value);
    
  }
  // {
  //   "task": "Task Name",
  //   "status": "TODO/DONE",
  //   "date" : "DATE"
  //   }
  const handleOnclick = function (){
   console.log("click")
   let temp = todo;
   temp.push({
    title: task,
    status: "todo",

   });
   setTodo(temp);
   setTask("");
   console.log(task);
  }
  const handleDone = function (index:number){
 console.log(index);
 let temp = todo
 temp[index].status = "done";
 setTodo(temp);
 setTask("");
 let done = dodo;
 done.push(temp[index]);
 
  }
  return (
    <div className="App">
      <div>
      <input type="text" value={task}  onChange={inputChange} />
      <button onClick={handleOnclick}>Add</button>
      </div>
      <div>
  
        <ul>
          {todo.map((value:any,index:number)=>{
            return(
              <li key = {index}>{value.title} ({value.status}) <button onClick = {()=>{
                handleDone(index)
              }}>Done</button></li>
              
            )
          })}
         
        </ul>
        <ul>
        {dodo.map((value:any,index:number)=>{
            return(
              <li key = {index}>{value.title} ({value.status}) <button onClick = {()=>{
                handleDone(index)
              }}>Done</button></li>
              
            )
          })}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
