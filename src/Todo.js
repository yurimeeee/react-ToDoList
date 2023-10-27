import React, { useState } from "react";


const Todo = ({data, deleteTodo})=>{
  const [ischecked, setIschecked] = useState(false);

  let className = 'form-check-label';
  let deco = {}; 
  if(ischecked){
    className += 'text-muted';
    deco = {textDecoration: 'line-through'}
  }
  
  const handleCheckboxClick = (e)=>{
    setIschecked(!ischecked); //체크박스 체크되면, 무조건 값을 반대로
    console.log(ischecked)
  }
  const todoDelete = (e)=>{
    deleteTodo(data.id)
  }

  return(
    <div className="d-flex"> 
      {/* <Form.Check 
            type="checkbox"
            id={`todo-${data.id}`}
            label={ data.text}
            onClick={handleCheckboxClick}
            className = {className}
            style ={deco}
          /> */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id={`todo-${data.id}`} onChange={handleCheckboxClick}/>
        <label className={className} style ={deco} htmlFor={`todo-${data.id}`}>
          {data.text}
        </label>
      </div>
      <button type="button" className="btn btn-light btn-sm" onClick={todoDelete} >Delete</button>
    </div>

  )
}



export default Todo;