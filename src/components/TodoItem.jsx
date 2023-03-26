import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

import React from "react";
const TodoItem = React.forwardRef(
    ({ todo, removeTodo, updateTodo, ...props }, ref) => {
        const { id, title, completed } = todo;

        const uncompletedStyle = "rounded-full border-2 w-5 h-5 inline-block flex-none";
        const completedStyle = "rounded-full border-2 w-5 h-5 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center";

        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-400 "
            >                
            <button onClick={() => updateTodo(id)} className={completed ? completedStyle : uncompletedStyle}>
                    { completed && <IconCheck/>}
                </button>
                <p className={`text-gray-600 dark:text-gray-400 transition-all duration-1000 grow ${completed && "line-through"}`}>{title}</p>
                <button onClick={() => removeTodo(id)} className="flex-none"><IconCross/></button>
            </article>
        );
})

export default TodoItem;