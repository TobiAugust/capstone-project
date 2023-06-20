import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const TaskItemContainer = styled.li`
  list-style-type: none;
  width: 100%;
  background-color: #ddc6ec;
  margin: 10px 0px;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const TaskTitle = styled.p`
  font-weight: solid;
`;

const TaskItem = ({ data, onDelete, onEdit }) => {
  return (
    <TaskItemContainer>
      <TaskTitle>
        <p>
          <strong>{data.person}</strong> should do{" "}
          <strong>{data.option}</strong> up to the <strong>{data.date}</strong>!
        </p>
      </TaskTitle>
      <Button
        type="button"
        onClick={onDelete}
        data-action="delete"
        text="Delete"
      />

      <Button type="button" onClick={onEdit} data-action="edit" text="Edit" />
    </TaskItemContainer>
  );
};

export default TaskItem;
