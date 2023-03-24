const TodoComputed = ( {computedItemsLeft, clearComplete} ) =>{
    return(
        <section className="p-4 text-gray-400 flex gap-4 justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
            <span className="">{computedItemsLeft} items left</span>
            <button onClick={clearComplete}>Clear Completed</button>
         </section>
    );
}

export default TodoComputed;