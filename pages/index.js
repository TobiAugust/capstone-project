import Button from "../components/Button";
import React, { useState } from "react";

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = () => {
    if (selectedOption && selectedDate) {
      const newData = { option: selectedOption, date: selectedDate };
      setSubmittedData([...submittedData, newData]);
      setSelectedOption("");
      setSelectedDate("");
    }
  };

  const handleClick = () => {
    setShowInput(true);
    setSelectedOption("");
    setSelectedDate("");
  };

  const handleHomeClick = () => {
    setShowInput(false);
    setSelectedOption("");
    setSelectedDate("");
  };

  return (
    <>
      <div className="container">
        <header>
          <h1>Haushalts-Retter</h1>
        </header>

        {!showInput ? (
          <Button text="Create Task" onClick={handleClick} />
        ) : (
          <div className="input-box">
            <div>
              <label htmlFor="option">Option:</label>
              <input
                type="text"
                id="option"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}

        {submittedData.length > 0 && (
          <div className="submitted-data">
            <h2>Anstehende Aufgaben:</h2>
            {submittedData.map((data, index) => (
              <p key={index}>
                Was ist zu tun: {data.option} <br />
                Bis wann erledigt: {data.date}
              </p>
            ))}
          </div>
        )}

        <footer>
          <button onClick={handleHomeClick}>Home</button>
        </footer>
      </div>
    </>
  );
}
