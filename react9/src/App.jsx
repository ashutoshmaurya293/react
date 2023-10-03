import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import Btn from "./Btn/ThemeBtn";
import { ThemeProvider } from "./components/Theam";

function App() {
  const [thememode, setTheme] = useState("light");
  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(thememode);
  }, [thememode]);

  return (
    <ThemeProvider value={{ thememode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
      </ThemeProvider>
  );
}

export default App;
