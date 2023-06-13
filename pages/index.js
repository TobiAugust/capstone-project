import Button from "../components/Button";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Header from "../components/Header";
import TaskItem from "../components/TaskItem.js";

export default function HomePage() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const selectedOption = formElements.option.value.trimStart();
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
      setTaskInput("");
      setDateInput("");
      formElements.option.value = "";
      formElements.date.value = "";
    }
  }

  const toggleTaskForm = (task) => {
    setShowInput(true);
    setSelectedTask(task);
    setTaskInput(task ? task.option : "");
    setDateInput(task ? task.date : "");
  };

  const handleCancel = () => {
    setShowInput(false);
    setSelectedTask(null);
    setTaskInput("");
    setDateInput("");
  };

  const handleDelete = (id) => {
    const updatedData = submittedData.filter((data) => data.id !== id);
    setSubmittedData(updatedData);
    setTaskInput("");
    setDateInput("");
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        {!showInput ? (
          <Button text="Create Task" onClick={() => toggleTaskForm(null)} />
        ) : (
          <div className="input-box">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="option">
                  <strong>Task:</strong>
                </label>
                <input
                  type="text"
                  id="option"
                  name="option"
                  required
                  value={taskInput}
                  onChange={(event) => setTaskInput(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="date">
                  <strong>Date:</strong>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={dateInput}
                  onChange={(event) => setDateInput(event.target.value)}
                />
              </div>
              <button type="submit">
                {selectedTask ? "Update" : "Submit"}
              </button>
              {showInput && <button onClick={handleCancel}>Back</button>}
            </form>
          </div>
        )}
        <section>
          <h2>Anstehende Aufgaben:</h2>
          {submittedData.length > 0 && (
            <div className="submitted-data">
              {submittedData.map((data) => (
                <TaskItem
                  key={data.id}
                  data={data}
                  onDelete={() => handleDelete(data.id)}
                  onEdit={() => toggleTaskForm(data)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      <footer>
        <Link href="/">Home</Link>
        <p>
          Entwickelt von{" "}
          <a href="https://github.com/TobiAugust">Tobias Augustyniak</a>
        </p>
      </footer>
    </>
  );
}
