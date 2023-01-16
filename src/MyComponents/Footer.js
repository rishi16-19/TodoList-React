import React from 'react'

export const Footer = () => {

  let footerStyle = {
      position: "relative",
      top:"70vh",
      width: "100%",
      border: "2px solid red"
    } 
    return (
   
    <footer className="bg-dark text-light text-center py-3" style={footerStyle}>
      <p>Copyright &Copy; MyTodoList.com</p>
        
    </footer>
  )
}
