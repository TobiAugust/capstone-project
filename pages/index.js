import Button from "../components/Button";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Header from "../components/Header";
import TaskItem from "../components/TaskItem.js";
import Container from "../components/Container";
import Form from "../components/Form";
import Label from "../components/Label";
import StyledInput from "../components/StyledInput";
import SubmittedData from "../components/SubmittedData";
import Footer from "../components/Footer";
import FooterText from "../components/FooterText";
import FooterLink from "../components/FooterLink";
import MainContainer from "../components/MainContainer";

export default function HomePage() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [formData, setFormData] = useState({
    person: "",
    option: "",
    date: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const { person, option, date } = formData;

    if (option && date && person) {
      if (selectedTask) {
        const updatedData = submittedData.map((data) => {
          if (data.id === selectedTask.id) {
            return {
              ...data,
              person,
              option,
              date,
            };
          }
          return data;
        });
        setSubmittedData(updatedData);
        setSelectedTask(null);
      } else {
        const newData = {
          id: uuidv4(),
          person,
          option,
          date,
        };
        setSubmittedData([...submittedData, newData]);
      }

      setFormData({
        person: "",
        option: "",
        date: "",
      });
    }
  }

  const toggleTaskForm = (task) => {
    setShowInput(true);
    setSelectedTask(task);
    setFormData({
      person: task ? task.person : "",
      option: task ? task.option : "",
      date: task ? task.date : "",
    });
  };

  const handleCancel = () => {
    setShowInput(false);
    setSelectedTask(null);
    setFormData({
      person: "",
      option: "",
      date: "",
    });
  };

  const handleDelete = (id) => {
    const updatedData = submittedData.filter((data) => data.id !== id);
    setSubmittedData(updatedData);
  };

  return (
    <>
      <Header />

      <MainContainer>
        <Container>
          {!showInput ? (
            <Button text="Create Task" onClick={() => toggleTaskForm(null)} />
          ) : (
            <Form onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="person">
                  <strong>Person:</strong>
                </Label>
                <StyledInput
                  type="text"
                  id="person"
                  name="person"
                  autoComplete="off"
                  required
                  value={formData.person}
                  onChange={(event) =>
                    setFormData({ ...formData, person: event.target.value })
                  }
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
                  autoComplete="off"
                  required
                  value={formData.option}
                  onChange={(event) =>
                    setFormData({ ...formData, option: event.target.value })
                  }
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
                  value={formData.date}
                  onChange={(event) =>
                    setFormData({ ...formData, date: event.target.value })
                  }
                />
              </div>
              <Button type="submit" text={selectedTask ? "Update" : "Submit"} />
              {showInput && <Button text="Back" onClick={handleCancel} />}
            </Form>
          )}
          <h2>Upcoming Tasks:</h2>
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
        </Container>
      </MainContainer>
      <Footer>
        <FooterText>Developed by</FooterText>
        <FooterLink href="https://github.com/TobiAugust">
          Tobias Augustyniak
        </FooterLink>
      </Footer>
    </>
  );
}
