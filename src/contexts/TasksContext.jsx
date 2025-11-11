/* eslint-disable react-refresh/only-export-components */
import { generateId } from "@/utils/generateId";
import { createContext, useContext, useState } from "react";

const TasksContext = createContext({
  tasks: [],
  addTasks: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export const useTasksContext = () => {
  const ctx = useContext(TasksContext);

  if (!ctx) {
    throw new Error("useTasksContext must be used in TasksContextProvider");
  }
  return ctx;
};

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTaskTitle, priorityNum) => {
    const isoString = new Date().toISOString();

    const newTask = {
      id: generateId(),
      title: newTaskTitle,
      priority: priorityNum,
      createdAt: isoString,
      updatedAt: isoString,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) => {
      const editableTaskIndex = prev.findIndex(
        (taskObj) => taskObj.id === updatedTask.id
      );

      if (editableTaskIndex === -1) {
        return prev;
      }
      const copy = [...prev];

      copy[editableTaskIndex].updatedAt = new Date().toISOString();
      copy[editableTaskIndex].priority = updatedTask.priority;
      copy[editableTaskIndex].title = updatedTask.title;

      return copy;
    });
  };

  const deleteTask = (deletedTaskId) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== deletedTaskId);
    });
  };

  return (
    <TasksContext value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TasksContext>
  );
};
