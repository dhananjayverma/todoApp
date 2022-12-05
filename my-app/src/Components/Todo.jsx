import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { useState } from 'react';

export default function Todo() {
    const [todos,setTodos]=useState([]);
    const handleAddTodo=(text)=>{
      const new_todo={
            id:new Date().toISOString(),
            title:text,
            status:false
        }
        setTodos([...todos,new_todo])
    }
    const handleToggle=(id)=>{
      const updateTodo=todos.map((todo)=>
      todo.id===id ?{...todo,status:!todo.status}:todo)
      setTodos(updateTodo)
    }
    const handleDelete=(id)=>{
      const DeleteData=todos.filter((todo)=>
      todo.id!=id)
    setTodos(DeleteData);
    }
    // const 
    console.log(todos)
  return (
    <div>
    <TodoInput handleAddTodo={handleAddTodo}/>
    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/> 
    </div>
  )
}
 