import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin: "10px 120px"

  }
  return (
    <div className="Container my-3" style={myStyle}>
       <h3 className=" my-3"> Todos List</h3>
       {props.todos.length===0 ? "No ToDo Left.":
       props.todos.map((todo) =>{
           return (
            <>
           <TodoItem  todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
           </>)
       })}
        
       
    </div>
  )
}
