import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Todo from './Todo';

function App() {
  const [todo, setTodo] = useState([
    {id:1, text:'Learn React', checked:false},
    {id:2, text:'Get a job', checked:false}
  ])
  let todos = todo.map(item=>(
    <Todo data={item} key={item.id} />
  ))


  return (
    <div className="container">
      <h1>To Do List</h1>
      <Form onSubmit={e =>{
        e.preventDefault();
        console.log(e.target.todo.value); //input에 name 값이 있어야 value를 가져올 수 있음
      }}>
        <Form.Group className="mb-3" controlId="todo1">
          <Form.Label>todo</Form.Label>
          <Form.Control type="text" name="todo" placeholder="할 일을 입력하세요."/>
        </Form.Group>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
      <hr/>
      <div>
        {todos}
      </div>


      
    </div>
  );
}

export default App;
