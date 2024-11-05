import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import TodoList from './assets/components/TodoList';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Have a life!', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <Footer count={todos.filter(todo => !todo.completed).length} 
      filter={filter} 
      setFilter={setFilter} 
      clearCompleted={clearCompleted} />
    </section>
  )
}

export default App
