import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const TaskItemContainer = styled.div`
  background-color: #ddc6ec;
  padding: 10px;
  text-align: center;
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
          <strong>{data.person}</strong> muss <strong>{data.option}</strong> bis
          zum <strong>{data.date}</strong>!
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
