import CrossIcon from "./icons/CrossIcon";

const TodoItem = () => {
    return (
        <article className="flex gap-4 p-4 border-b border-b-gray-400 px-4">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online javascript curse</p>
            <button className="flex-none"><CrossIcon/></button>
        </article>
    );
}

export default TodoItem;