import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-green-300 ">
      <h1 className="text-green-300">.</h1>
      <div className=" flex flex-wrap justify-between mx-5 my-5">
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
      </div>
      <div className=" flex flex-wrap justify-between mx-5 my-5">
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
        <h1 className="text-red-800 text-2xl ">Hello World </h1>
      </div>
    </div>
  );
}

export default App;
