import Button from "../components/Button";
import React from "react";

export default function HomePage() {
  function handleClick() {}
  return (
    <>
      <div className="container">
        <header>
          <h1>Planer</h1>
        </header>

        <Button text="Create Task" onClick={handleClick} />

        <footer>
          <button>Home</button>
        </footer>
      </div>
    </>
  );
}
