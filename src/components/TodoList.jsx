import TodoItem from "./TodoItem";

const TodoList = ({todos, updateTodo, removeTodo}) => {
    console.log(todos)
    
    return(
        <>
            {todos.map(todo => (
                <TodoItem key={todo.id}  todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
            ))}
        </>
        )
}

export default TodoList;