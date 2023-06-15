import Button from "../components/Button";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Header from "../components/Header";
import TaskItem from "../components/TaskItem.js";
import Container from "../components/Container";
import InputBox from "../components/InputBox";
import Form from "../components/Form";
import Label from "../components/Label";
import StyledInput from "../components/StyledInput";
import SubmittedData from "../components/SubmittedData";
import Footer from "../components/Footer";
import FooterText from "../components/FooterText";
import FooterLink from "../components/FooterLink";
import MainContainer from "../components/MainContainer";
import Section from "../components/Section";

export default function HomePage() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [personInput, setPersonInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const selectedOption = formElements.option.value.trimStart();
    const selectedDate = formElements.date.value;
    const selectedPerson = formElements.person.value;

    if (selectedOption && selectedDate && selectedPerson) {
      if (selectedTask) {
        const updatedData = submittedData.map((data) => {
          if (data.id === selectedTask.id) {
            return {
              ...data,
              person: selectedPerson,
              option: selectedOption,
              date: selectedDate,
            };
          }
          return data;
        });
        setSelectedPerson(null);
        setSubmittedData(updatedData);
        setSelectedTask(null);
      } else {
        const newData = {
          id: uuidv4(),
          person: selectedPerson,
          option: selectedOption,
          date: selectedDate,
        };
        setSubmittedData([...submittedData, newData]);
      }
      setPersonInput("");
      setTaskInput("");
      setDateInput("");
      formElements.option.value = "";
      formElements.date.value = "";
      formElements.person.value = "";
    }
  }

  const toggleTaskForm = (task) => {
    setShowInput(true);
    setSelectedTask(task);
    setTaskInput(task ? task.option : "");
    setSelectedPerson(task ? task.person : null);
    setPersonInput(task ? task.person : "");
    setDateInput(task ? task.date : "");
  };

  const handleCancel = () => {
    setShowInput(false);
    setSelectedTask(null);
    setTaskInput("");
    setSelectedPerson(null);
    setPersonInput("");
    setDateInput("");
  };

  const handleDelete = (id) => {
    const updatedData = submittedData.filter((data) => data.id !== id);
    setSubmittedData(updatedData);
    setPersonInput("");
    setTaskInput("");
    setDateInput("");
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <MainContainer>
        <Container>
          {!showInput ? (
            <Button text="Create Task" onClick={() => toggleTaskForm(null)} />
          ) : (
            <InputBox>
              <Form onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="date">
                    <strong>Person:</strong>
                  </Label>
                  <StyledInput
                    type="text"
                    id="person"
                    name="person"
                    required
                    value={personInput}
                    onChange={(event) => setPersonInput(event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="option">
                    <strong>Task:</strong>
                  </Label>
                  <StyledInput
                    type="text"
                    id="option"
                    name="option"
                    required
                    value={taskInput}
                    onChange={(event) => setTaskInput(event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="date">
                    <strong>Date:</strong>
                  </Label>
                  <StyledInput
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={dateInput}
                    onChange={(event) => setDateInput(event.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  text={selectedTask ? "Update" : "Submit"}
                />
                {showInput && <Button text="Back" onClick={handleCancel} />}
              </Form>
            </InputBox>
          )}
          <Section>
            <h2>Anstehende Aufgaben:</h2>
            {submittedData.length > 0 && (
              <SubmittedData>
                {submittedData.map((data) => (
                  <TaskItem
                    key={data.id}
                    data={data}
                    onDelete={() => handleDelete(data.id)}
                    onEdit={() => toggleTaskForm(data)}
                  ></TaskItem>
                ))}
              </SubmittedData>
            )}
          </Section>
        </Container>
      </MainContainer>
      <Footer>
        <FooterText>
          <a href="/">Home</a>
          <br></br>
          Entwickelt von{" "}
        </FooterText>
        <FooterLink>
          <a href="https://github.com/TobiAugust">Tobias Augustyniak</a>
        </FooterLink>
      </Footer>
    </>
  );
}
