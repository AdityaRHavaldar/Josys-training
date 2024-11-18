import React from "react";
import "./ToDoList.css";

interface TodoChildProps {
  task: {
    id: number;
    text: string;
    isCompleted: boolean;
  };
  deleteTask: (taskId: number) => void;
  toggleComplete: (taskId: number) => void;
}

const ToDoChild: React.FC<TodoChildProps> = ({
  task,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <li className="listItem">
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleComplete(task.id)}
        className="checkbox"
      />
      <span className={`todo-item ${task.isCompleted ? "completed" : ""}`}>
        {task.text}
      </span>
      <button
        className="button deleteToDo"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoChild;
