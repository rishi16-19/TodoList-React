//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import  {Todos}  from './MyComponents/Todos';
import  {Footer}  from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState } from 'react';

function App() {


 const onDelete = (todo)=>{
  console.log("I am On Delete",todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  
 }

 const addTodo=(title,desc)=>{
  console.log("I am adding a todo,", title,desc);
  let sno;
  if(todos.length===0){
    sno=0;
  }
  else{
  let sno =todos[todos.length-1].sno+1;
  }
  const myTodo={
    sno: sno,
    title: title,
    desc: desc,
    
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo)
 }

  const [todos,setTodos]=useState([
    {
      sno:1,
      title: "Go to the market",
      desc: "You need to go to the market"
    },
    {
      sno:2,
      title: "Go to the Home",
      desc: "You need to go to Home"
    },
    {
      sno:3,
      title: "Go to the School",
      desc: "You need to go to the School"
    },
    {
      sno:4,
      title: "Go to the Ghat",
      desc: "You need to go to the Ghat"
    }
  ]);
  return (
   <>
    <Header title="My Todos-List" searchbar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos  todos={todos} onDelete={onDelete}/>
    <Footer/>
   </>
  );
}

export default App;
