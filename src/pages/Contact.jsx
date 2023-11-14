import { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";

export function Contact() {
  const counter = useContext(CounterContext);
  return (
    <div>
      <h1 className="text-8xl text-purple-700">Hello from Contact</h1>
      <Link to="/">Home</Link>
      <p>Counter: {counter}</p>
    </div>
  );
}
