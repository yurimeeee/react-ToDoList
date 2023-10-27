import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Todo from './Todo';

function App() {

  //데이터 추가
  // window.localStorage.setItem('name', '홍길동');
  // console.log(window.localStorage.getItem('name'))
  


  const [todoid, setTodoid] = useState(2); // 현재 2개의 값을 입력하여 기본값 2
  const [todo, setTodo] = useState([
    {id:1, text:'Learn React', checked:false},
    {id:2, text:'Get a job', checked:false}
    //객체나 배열은 storage에 저장시 문자로 변환해야함. 아니면 이렇게 뜸 ->[object Object],[object Object] 
    //그리고 todo로 다시 넣으려면 문자열이 아닌 객체나 배열로 다시 변환 필요 
  ])
  // const objString = JSON.stringify(todo);  //객체,배열 -> 문자열로 변환
  // console.log(objString);
  // window.localStorage.setItem('todo', objString);  //스토리지 저장
  // window.localStorage.getItem('todo');  //스토리지 읽기
  // const todoObj = JSON.parse(objString);  //문자열 -> 객체,배열로 변환
  // console.log(todoObj);

  const getTodolist = ()=>{
    let todoListFromStoage = window.localStorage.getItem('todo');
    console.log(todoListFromStoage);
    if(todoListFromStoage !==null){
      //값이 있다면
      const todoObj = JSON.parse(todoListFromStoage);
      setTodo(todoObj);
    }else{
      const todoString = JSON.stringify(todo);
      window.localStorage.setItem('todo', todoString);
    }
  }

  //기존 스토리지에서 가져오는 것은 한번만 작동 -> 아니면 무한 루프
  useEffect(()=>{ 
    getTodolist() 
  },[])

  const deleteTodo = (id) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex(item =>(item.id ===id));
    newTodos.splice(index,1);
    // newTodos.splice(id,1);  이렇게 써도 됨
    setTodo(newTodos);
  }

  let todos = todo.map(item=>(
    <Todo data={item} key={item.id} deleteTodo={deleteTodo} />
  ))

  let addTodo = (value)=>{
   //복사본을 만들고 값을 추가
    let newTodo = [...todo];
    let newId  = todoid + 1;
    setTodoid(newId); //todo는 상수라 직접 바꿀 수 없어 todoid++는 불가 todoid +1은 가능하나 느림  
    newTodo.push({id:newId, text:value, checked:false});
    setTodo(newTodo); //복사본으로 todo 교체
    document.getElementById('todo').value='';
  };

  const setStorage = ()=>{
    const todoString = JSON.stringify(todo);
    window.localStorage.setItem('todo', todoString);
    console.log('스토리지 저장');
  }

  useEffect(()=>{ 
    setStorage() 
  },[todo]) //todo의 값이 변경될때마다 setStorage 실행
  


  return (
    <div className="container">
      <h1>To Do List</h1>
      <Form onSubmit={e =>{
        e.preventDefault();
        //console.log(e.target.todo.value); //input에 name 값이 있어야 value를 가져올 수 있음
        addTodo(e.target.todo.value);
      }}>
        <Form.Group className="mb-3" controlId="todo">
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
