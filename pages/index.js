import Button from "../components/Button";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function HomePage() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const selectedOption = formElements.option.value.trim().replace(/\s+/g, "");
    const selectedDate = formElements.date.value;
    if (selectedOption && selectedDate) {
      if (selectedTask) {
        const updatedData = submittedData.map((data) => {
          if (data.id === selectedTask.id) {
            return { ...data, option: selectedOption, date: selectedDate };
          }
          return data;
        });
        setSubmittedData(updatedData);
        setSelectedTask(null);
      } else {
        const newData = {
          id: uuidv4(),
          option: selectedOption,
          date: selectedDate,
        };
        setSubmittedData([...submittedData, newData]);
      }
      formElements.option.value = "";
      formElements.date.value = "";
    }
  }

  const toggleTaskForm = (task) => {
    setShowInput(true);
    setSelectedTask(task);
  };

  const handleCancel = () => {
    setShowInput(false);
    setSelectedTask(null);
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
          <Button text="Create Task" onClick={() => toggleTaskForm(null)} />
        ) : (
          <div className="input-box">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="option">Task:</label>
                <input
                  type="text"
                  id="option"
                  name="option"
                  required
                  defaultValue={selectedTask ? selectedTask.option : ""}
                />
              </div>
              <div>
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  defaultValue={selectedTask ? selectedTask.date : ""}
                />
              </div>
              <button type="submit">
                {selectedTask ? "Update" : "Submit"}
              </button>
              {showInput && <button onClick={handleCancel}>Back</button>}
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
                <button type="button" onClick={() => handleDelete(data.id)}>
                  Delete
                </button>
                <button type="button" onClick={() => toggleTaskForm(data)}>
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}

        <footer>
          <Link href="/">Home</Link>
        </footer>
      </div>
    </>
  );
}
