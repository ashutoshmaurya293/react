import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowrd, setCharAllowed] = useState(false);
  const [pasward, setPasward] = useState("");

  const paswardGenerater = useCallback(() => {
    let pas = "";
    let string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numberAllowed) string += "0123456789";
    if (charAllowrd) string += "!@#$%^&*()";
    for (let i = 1; i <= Array.length; i++) {
      let Char = Math.floor(Math.random() * string.length + 1);
      pas = string.charAt(Char);
      setPasward(Char)
    }
  }, [length, numberAllowed, charAllowrd, setPasward]);

  return (
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pasward}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2"></div>
        <div className="flex items-center gap-x-1"></div>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
         />
         <label> Length:{length}</label>

      </div>
  );
}

export default App;
