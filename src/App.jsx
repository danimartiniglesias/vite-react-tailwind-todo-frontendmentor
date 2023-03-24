import TodoComputed from "./components/TodoComputed";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const initialStateTodos = localStorage.getItem("todos-React-Todo") ? JSON.parse(localStorage.getItem("todos-React-Todo")) : [
  {
    id:1,
    title: "Go to the gym",
    completed: true
  },
  {
    id:2,
    title: "Buy apples",
    completed: false
  },
  {
    id:3,
    title: "Call mama",
    completed: false
  }
];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect (() => {
    localStorage.setItem("todos-React-Todo", JSON.stringify(todos))
  },[todos]);
  const [filter, setFilter] = useState("all");

  const filteredTodos = () => {
    switch(filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed)
      case "completed":
          return todos.filter((todo) => todo.completed)
    }
  }

  const changeFilter = (filterBy) => {
    setFilter(filterBy);
  }
  const createTodo  = (title) => {
    const newTodo = {
      id: todos.length +1,
      title: title.trim(),
      completed: false
    };

    setTodos([...todos, newTodo]);
  }

  const updateTodo = (id) =>{
    setTodos(
      todos.map( todo => todo.id === id  ? {...todo, completed: !todo.completed} : todo)
    );

  };
  const removeTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }

    const clearComplete = () => {
    
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] transition-all duration-1000">
      
     <Header />
      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <TodoCreate createTodo={createTodo}/>
        <div className="bg-white rounded-t-md mt-8">
          <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
        
        </div>
        <TodoComputed computedItemLeft={computedItemsLeft} clearComplete={clearComplete}/>
        <TodoFilter changeFilter={changeFilter} filter={filter} />

        <Footer />

      </main>
    </div>
  )

} 

export default App;