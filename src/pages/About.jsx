import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";

export function About() {
  const counter = useContext(CounterContext);
  return (
    <div>
      <h1 className="text-8xl text-pink-700">Hello from About</h1>
      <Link to="/contact">Contact</Link>
      <p>Counter: {counter}</p>
    </div>
  );
}
