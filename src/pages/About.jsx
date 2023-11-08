import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1 className="text-8xl text-pink-700">Hello from About</h1>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
