import Button from "../components/Button";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function HomePage() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showInput, setShowInput] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const selectedOption = formElements.option.value;
    const selectedDate = formElements.date.value;
    if (selectedOption && selectedDate) {
      const newData = {
        id: uuidv4(), // Eindeutige ID für jeden generierten Task als Lösung
        option: selectedOption,
        date: selectedDate,
      };
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

  const handleDelete = (id) => {
    const updatedData = submittedData.filter((data) => data.id !== id);
    setSubmittedData(updatedData);
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
            {submittedData.map((data) => (
              <div key={data.id} className="task-item">
                <p>
                  Was ist zu tun: {data.option} <br />
                  Bis wann erledigt: {data.date}
                </p>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {showInput && <button onClick={handleCancel}>Back</button>}
        <footer>
          <Link href="/">Home</Link>
        </footer>
      </div>
    </>
  );
}
