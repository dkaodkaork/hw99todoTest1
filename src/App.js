import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, body: "리액트 어려워요" },
    { id: 2, body: "리액트 질문있어요" },
  ]);

  const [body, setBody] = useState("");

  const addTodoHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      body: body,
    };
    if (body !== "") {
      setTodos([...todos, newTodo]);
    }
  };
  //
  return (
    <div className="layout">
      <div className="inputbox-style">
        <input
          value={body}
          className="input-style"
          placeholder="내용을 입력하세요"
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <button onClick={addTodoHandler}>추가하기</button>
      </div>

      <div className="title-style">
        <h1>Todo List</h1>
      </div>
      <div className="cardbox-style">
        {todos.map((todo) => {
          return (
            <div className="card-style" todo={todo} key={todo.id}>
              {todo.body}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
console.log("");
