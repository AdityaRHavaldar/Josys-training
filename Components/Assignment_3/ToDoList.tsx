import React, { useState } from "react";
import ToDoChild from "./ToDoChild";
import "./ToDoList.css";

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Learn TypeScript", isCompleted: false },
    { id: 2, text: "Learn React", isCompleted: false },
    { id: 3, text: "Build a ToDo App", isCompleted: false },
  ]);

  const [taskText, setTaskText] = useState<string>("");

  const addTask = (taskText: string) => {
    if (taskText.trim() !== "") {
      const newTask: Task = {
        id: tasks.length + 1,
        text: taskText,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setTaskText("");
    }
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="toDoContainer">
      <h1>To-Do List</h1>

      <div className="inputContainer">
        <input
          type="text"
          id="task-input"
          placeholder="Add a new task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={(e) => {
            const target = e.target as HTMLInputElement;
            if (e.key === "Enter" && target.value.trim() !== "") {
              addTask(target.value);
            }
          }}
        />
        <button className="button addToDo" onClick={() => addTask(taskText)}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <ToDoChild
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
