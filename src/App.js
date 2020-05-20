import React, { useState, useEffect } from "react";
import queryString from 'query-string'
import logo from "./logo.svg";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "todo1" },
    { id: 2, title: "todo2" },
    { id: 3, title: "todo3" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filter)
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON.pagination)
        setPostList(responseJSON.data);
        setPagination(responseJSON.pagination);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, [filter]);

  const handleTodo = (todo) => {
    const newTodoList = todoList.filter((item) => item.id !== todo.id);
    setTodoList(newTodoList);
  };

  const submitForm = (formValue) => {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setFilter({
      ...filter,
      _page: newPage,
    })
  };

  return (
    <div className="app">
      <h1> Welcome to React Hook!</h1>
      {/* <ColorBox/>
      <TodoList toDos={todoList} onTodoClick={handleTodo} />
      <TodoForm onSubmit={submitForm}/> */}
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
