import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark" || window.matchMedia('(prefers-color-scheme: dark)').matches;

const Header = () =>{

  const [darkMode, setDarkMode] = useState(initialStateDarkMode)
  const handleClickToggleTheme = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem ("theme", "dark");
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem ("theme", "light");
    }
  },[darkMode])
    return (
        <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
            <h1 className="uppercase font-semibold tracking-[0.3em] text-white text-3xl">
            Todo
          </h1>
          <button onClick={handleClickToggleTheme}>
            {darkMode ? <IconMoon fill = "#000"/> : <IconSun />}
          </button>
        </div>
      </header>
    );
}

export default Header;