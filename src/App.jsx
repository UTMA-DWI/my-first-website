import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact } from "./pages";
import { CounterContext } from "./context/CounterContext";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(5);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <CounterContext.Provider value={counter}>
      <BrowserRouter>
        <button onClick={handleCounter} className="bg-indigo-400 px-4 py-2">
          Change counter
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CounterContext.Provider>
  );
}

export default App;
