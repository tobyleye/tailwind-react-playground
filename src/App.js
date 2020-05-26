import React from "react";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import "./tailwind.generated.css";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen">
        <Hero />
        <Discover />
      </div>
    </div>
  );
}

export default App;
