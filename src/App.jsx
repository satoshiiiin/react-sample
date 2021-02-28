import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (!todoText) return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    setIncompleteTodos(deleteTodos(index, incompleteTodos));
  };

  const onClickComplete = (index) => {
    setCompleteTodos([...completeTodos, incompleteTodos[index]]);
    setIncompleteTodos(deleteTodos(index, incompleteTodos));
  };

  const onClickBack = (index) => {
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]);
    setCompleteTodos(deleteTodos(index, completeTodos));
  };

  const deleteTodos = (index, todos) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    return newTodos;
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {console.log(incompleteTodos.length)}
      {incompleteTodos.length >= 5 && (
        <p>５以上です。TODOを消化してください。</p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClick={onClickBack} />
    </>
  );
};
