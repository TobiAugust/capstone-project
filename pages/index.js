import Button from "../components/Button";
import React, { useState } from "react";

export default function HomePage() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showInput, setShowInput] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const selectedOption = formElements.option.value;
    const selectedDate = formElements.date.value;
    if (selectedOption && selectedDate) {
      const newData = { option: selectedOption, date: selectedDate };
      setSubmittedData([...submittedData, newData]);
      formElements.option.value = "";
      formElements.date.value = "";
    }
  }

  const toggleTaskForm = () => {
    setShowInput(true);
  };

  const handleCancel = () => {
    setShowInput(false);
  };

  return (
    <>
      <div className="container">
        <header>
          <h1>Haushalts-Retter</h1>
        </header>

        {!showInput ? (
          <Button text="Create Task" onClick={toggleTaskForm} />
        ) : (
          <div className="input-box">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="option">Task:</label>
                <input type="text" id="option" name="option" required />
              </div>
              <div>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        <h2>Anstehende Aufgaben:</h2>
        {submittedData.length > 0 && (
          <div className="submitted-data">
            {submittedData.map((data, index) => (
              <p key={index}>
                Was ist zu tun: {data.option} <br />
                Bis wann erledigt: {data.date}
              </p>
            ))}
          </div>
        )}
        {showInput && <button onClick={handleCancel}>Back</button>}
        <footer>
          <a href="/">Home</a>
        </footer>
      </div>
    </>
  );
}
