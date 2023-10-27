import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Todo = ({data})=>{
  return(
    <div className="d-flex"> 
      <Form.Check 
            type="checkbox"
            id={`todo-${data.id}`}
            label={ data.text}
          />
      <Button variant="light" size="sm">Delete</Button>
    </div>

  )
}



export default Todo;