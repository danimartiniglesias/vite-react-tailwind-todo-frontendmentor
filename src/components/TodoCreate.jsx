import { useState } from "react";

const TodoCreate = ({createTodo}) => {

  const [title, setTitle] = useState('');
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(title);
    if(!title.trim()){
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block 
          "></span>
          <input 
            type="text"
            placeholder="Create a new todo..." 
            className="w-full text-gray-400 outline-none" 
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            />
        </form>
    );
}

export default TodoCreate;