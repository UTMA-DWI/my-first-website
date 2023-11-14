import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";

export function Home() {
  const counter = useContext(CounterContext);
  return (
    <div>
      <h1 className="text-8xl text-indigo-500">Hello from Home</h1>
      <Link to="/about">About</Link>
      <p>Counter: {counter}</p>
    </div>
  );
}
