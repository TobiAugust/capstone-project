import React from "react";
import styled from "styled-components";

const TaskItemContainer = styled.div`
  border: 1px solid #ccc;
  background-color: coral;
  padding: 10px;
  text-align: left;
`;

const TaskTitle = styled.p`
  font-weight: bold;
`;

const TaskItem = ({ data, onDelete, onEdit }) => {
  return (
    <TaskItemContainer>
      <TaskTitle>
        <strong>Was ist zu tun:</strong> {data.option}
      </TaskTitle>
      <p>
        <strong>Bis wann erledigt:</strong> {data.date}
      </p>
      <button type="button" onClick={onDelete} data-action="delete">
        Delete
      </button>
      <button type="button" onClick={onEdit} data-action="edit">
        Edit
      </button>
    </TaskItemContainer>
  );
};

export default TaskItem;
