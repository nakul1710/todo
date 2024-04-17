import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [todo,setTodo] = React.useState<any>([])
  const [task,setTask] = React.useState<string>("") // task var setTask("nakul")
  return (
    <div className="App">
      <div>
      <input type="text"  onChange={(e:any)=>{
        console.log(e.target.value);
        setTask(e.target.value);
      }} />
      <button onClick={()=>{
        let temp = todo;
        temp.push(task);
        setTodo(temp)
      }}>Add</button>
      </div>
      <div>
        <div>
          {task}
        </div>
        <ul>
          {todo.map((value:string)=>{
            return(
              <li>{value}</li>
            )
          })}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
