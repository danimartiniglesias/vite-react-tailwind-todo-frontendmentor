import MoonIcon from "./components/icons/MoonIcon";
import CrossIcon from "./components/icons/CrossIcon"
const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
            <h1 className="uppercase font-semibold tracking-[0.3em] text-white text-3xl">
            Todo
          </h1>
          <button><MoonIcon fill = "#000"/></button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block 
          "></span>
          <input type="text"placeholder="Create a new todo..." 
          className="w-full text-gray-400 outline-none" />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md">
          <article className="flex gap-4 p-4 border-b border-b-gray-400 px-4">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online javascript curse</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>
          <article className="flex gap-4 p-4 border-b border-b-gray-400 px-4">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online javascript curse</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>
          <article className="flex gap-4 p-4 border-b border-b-gray-400 px-4">
            <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
            <p className="text-gray-600 grow">Complete online javascript curse</p>
            <button className="flex-none"><CrossIcon/></button>
          </article>
        
          <section className="p-4 text-gray-400 flex gap-4 justify-between">
            <span className="">5 items left</span>
            <button>Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center mt-8">Drag and drop to render list</section>
    </div>
  )

} 

export default App;