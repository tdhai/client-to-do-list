import React, { Fragment } from "react";
import "./App.css";
import InputTodo from "./components/InputToDo";
import ListTodos from "./components/ListToDos";

function App() {
  return (
    <Fragment>
      <div>
        <InputTodo></InputTodo>
        <ListTodos></ListTodos>
      </div>
    </Fragment>
  );
}

export default App;
