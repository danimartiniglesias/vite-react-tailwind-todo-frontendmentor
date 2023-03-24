import MoonIcon from "./icons/IconMoon";

const Header = () =>{
    return (
        <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
            <h1 className="uppercase font-semibold tracking-[0.3em] text-white text-3xl">
            Todo
          </h1>
          <button><MoonIcon fill = "#000"/></button>
        </div>
      </header>
    );
}

export default Header;