/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const TaskEditorInfoContext = createContext({
  taskEditorInfo: {
    taskEditorOpened: false,
    type: "create", // "create" | "edit",
    editableTaskInfo: null, // null || {}
  },
  openCreateMode: () => {},
  openEditMode: () => {},
  closeEditor: () => {},
});

export const useTaskEditorInfoContext = () => {
  const ctx = useContext(TaskEditorInfoContext);

  if (!ctx) {
    throw new Error(
      "useTaskEditorInfoContext must be used in TaskEditorInfoContextProvider"
    );
  }
  return ctx;
};

export const TaskEditorInfoContextProvider = ({ children }) => {
  const [taskEditorInfo, setTaskEditorInfo] = useState({
    taskEditorOpened: false,
    type: "create",
    editableTaskInfo: null,
  });

  const openEditMode = (editableTask) => {
    setTaskEditorInfo({
      taskEditorOpened: true,
      type: "edit",
      editableTaskInfo: editableTask,
    });
  };

  const openCreateMode = () => {
    setTaskEditorInfo({
      taskEditorOpened: true,
      type: "create",
      editableTaskInfo: null,
    });
  };

  const closeEditor = () => {
    setTaskEditorInfo((prev) => {
      return {
        ...prev,
        taskEditorOpened: false,
        editableTaskInfo: null,
      };
    });
  };

  return (
    <TaskEditorInfoContext
      value={{
        taskEditorInfo,
        openCreateMode,
        closeEditor,
        openEditMode,
      }}>
      {children}
    </TaskEditorInfoContext>
  );
};
