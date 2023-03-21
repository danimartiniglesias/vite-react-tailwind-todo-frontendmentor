import TodoComputed from "./components/TodoComputed";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      
     <Header />
      <main className="container mx-auto px-4 mt-8">
        {/*TodoCreate*/}
        <TodoCreate />
        <div className="bg-white rounded-t-md mt-8">
          <TodoList />
        
        </div>
        <TodoComputed />
        <TodoFilter />

        <Footer />

      </main>
    </div>
  )

} 

export default App;