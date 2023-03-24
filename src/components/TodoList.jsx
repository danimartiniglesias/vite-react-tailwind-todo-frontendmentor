import TodoItem from "./TodoItem";

const TodoList = ({todos, updateTodo, removeTodo}) => {
    console.log(todos)
    
    return(
        <div className="mt-8 overflow-hidden rounded-t-md bg-white [&>article]:p-4 dark:bg-gray-800 transition-all duration-1000">
            {todos.map(todo => (
                <TodoItem key={todo.id}  todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
            ))}
        </div>
        )
}

export default TodoList;