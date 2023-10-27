import React, { useState } from "react";


const Todo = ({data, deleteTodo, update})=>{
  const [mode, setMode] = useState('read');
  const [ischecked, setIschecked] = useState(false);
  const [text, setText] = useState(data.text);

  let className = 'form-check-label';
  let formClass = 'hidden';
  let btnClass = '';
  if(mode ==='edit'){
    className += ' hidden'
    formClass = '';
    btnClass += 'hidden';
  }
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
  const todoEdit =  (e)=>{
    setMode('edit');
  }
  const updateTodo =  (e)=>{
    update(data.id, text);
  }
  
  const handleEdit =  (val)=>{
    setText(val)
    console.log(text)
  }
  const changeMode = (val)=>{
    setMode(val);
  }

  return(
    <div className="d-flex justify-content-between"> 
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id={`todo-${data.id}`} onChange={handleCheckboxClick}/>
        <label className={className} style ={deco} htmlFor={`todo-${data.id}`}>
          {text}
        </label>
        <form className={formClass} onSubmit={updateTodo}> 
          <input className="form-control edit-input" type="text" value={text} onChange={(e)=>{handleEdit(e.target.value)}}/>
          <button type="submit" className="btn btn-secondary btn-sm me-2">Update</button>
          <button type="button" className="btn btn-light btn-sm" onClick={()=>{changeMode('read')}} >Cancel</button>
        </form>
      </div>
      <div className={btnClass}>
        <button type="button" className="btn btn-info btn-sm me-2" onClick={todoEdit} >Edit</button>
        <button type="button" className="btn btn-light btn-sm" onClick={todoDelete} >Delete</button>
      </div>

      
    </div>

  )
}



export default Todo;