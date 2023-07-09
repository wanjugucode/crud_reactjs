import React from 'react';
import { useEffect, useState } from "react";
import Axios from 'axios';
import {MainNavbar} from './MainNav';




export function Home() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', body: '' });
  const [editingTodo, setEditingTodo] = useState(null);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);




  useEffect(() => {
    fetchTodoList();
  }, []);

  async function fetchTodoList() {
    try {
      const response = await Axios.get('http://localhost:8000/todo-list');
      const todoListData = response.data;
      setTodoList(todoListData);
    } catch (error) {
      console.error('Error retrieving todo list:', error);
    }
  }

  async function addTodo() {
    try {
      const response = await Axios.post('http://localhost:8000/todo-list', newTodo);
      const createdTodo = response.data;
      setTodoList([...todoList, createdTodo]);
      setNewTodo({ title: '', body: '' });
      setShowAddTodoForm(false);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }
  async function updateTodo(todoId, updatedTodo) {
    try {
      await Axios.put(`http://localhost:8000/todo-list/${todoId}`, updatedTodo);
      const updatedList = todoList.map((todo) =>
        todo.id === todoId ? { ...todo, ...updatedTodo } : todo
      );
      setTodoList(updatedList);
      setEditingTodo(null);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  }


  async function updateTodoStatus(todoId, updatedTodo) {
    try {
      await Axios.put(`http://localhost:8000/todo-list/${todoId}`, updatedTodo);
      const updatedList = todoList.map((todo) =>
        todo.id === todoId ? { ...todo, ...updatedTodo } : todo
      );
      setTodoList(updatedList);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  }
  function startEditing(todoId) {
    const todoToEdit = todoList.find((todo) => todo.id === todoId);
    setEditingTodo(todoToEdit);
  }

  function cancelEditing() {
    setEditingTodo(null);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  }

  async function deleteTodo(todoId) {
    try {
      await Axios.delete(`http://localhost:8000/todo-list/${todoId}`);
      const updatedList = todoList.filter((todo) => todo.id !== todoId);
      setTodoList(updatedList);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }
  return (
   
       <div className="container">
        <MainNavbar/>
      <div className="form">
      <h1>Todo List</h1>
      {todoList.length > 0 ? (
        <table className="todo-table">

        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className='column'>
          {todoList.map((todo) => (
            <tr key={todo.id}>
              {editingTodo && editingTodo.id === todo.id ? (
                <td>
                  <input
                    type="text"
                    name="title"
                    value={editingTodo.title}
                    onChange={(event) =>
                      setEditingTodo((prevTodo) => ({
                        ...prevTodo,
                        title: event.target.value,
                      }))
                    }
                  />
                </td>
              ) : (

          <td>{todo.title}</td>
              )}
              {editingTodo && editingTodo.id === todo.id ? (
                <td>
                  <input
                    type="text"
                    name="body"
                    value={editingTodo.body}
                    onChange={(event) =>
                      setEditingTodo((prevTodo) => ({
                        ...prevTodo,
                        body: event.target.value,
                      }))
                    }
                  />
                </td>
              ) : (
                <td>{todo.body}</td>
              )}

              <td>
                {editingTodo && editingTodo.id === todo.id ? (
                  <div className="edit-actions">
                    <button className="save-button" onClick={() => updateTodo(editingTodo.id, editingTodo)}>
                      Save
                    </button>
                    <button className="cancel-button" onClick={cancelEditing}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="actions">
                    <button className="complete-button" onClick={() => updateTodoStatus(todo.id, { completed: !todo.completed })}>
                      {todo.completed ? 'Incomplete' : 'Completed'}
                    </button>
                    <button className="edit-button" onClick={() => startEditing(todo.id)}>
                      Edit
                    </button>
                    <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
                      Delete
                    </button>
             
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p>No todos found.</p>
      )}
          {!showAddTodoForm && (
        <button className="add-button" onClick={() => setShowAddTodoForm(true)}>
          Add Todo
        </button>
      )}
      {showAddTodoForm && (
        <form onSubmit={addTodo} className="add-form">
          <label for='title'>Title</label>
          <input
            type="text"
            id='title'
            name="title"
            placeholder="Enter title"
            value={newTodo.title}
            onChange={handleInputChange}
          />
          <br></br>
        <label for='body'>Description</label>

          <input
            type="text"
            id='body'
            name="body"
            placeholder="Enter body"
            value={newTodo.body}
            onChange={handleInputChange}
          />
          <button type="submit">Save Todo</button>
          <button className="cancel-button" onClick={() => setShowAddTodoForm(false)}>
            Cancel
          </button>
        </form>
      )}
              
              </div>
    
    </div>
  );
}

export default Home;

