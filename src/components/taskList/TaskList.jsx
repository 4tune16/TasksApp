import { useTaskEditorInfoContext } from "@/contexts/TaskEditorInfoContext";
import { useTasksContext } from "@/contexts/TasksContext";
import { useTasksSortCriterionContext } from "@/contexts/TasksSortCriterionContext";
import { useMemo } from "react";
import { Task } from "../task/Task";
import { TaskListEmptyView } from "./TaskListEmptyView";
import cl from "./taskList.module.css";

export const TaskList = () => {
  const { tasks } = useTasksContext();
  const {
    openEditMode,
    taskEditorInfo: { editableTaskInfo },
  } = useTaskEditorInfoContext();
  const {
    tasksSortCriterion: { sortBy, sortDirection },
  } = useTasksSortCriterionContext();
  const isEmptyData = tasks.length === 0;

  const sortedTasks = useMemo(() => {
    if (!sortBy) {
      return tasks;
    }

    if (sortBy === "priority") {
      if (sortDirection === "fromImportant") {
        return [...tasks].sort((a, b) => b.priority - a.priority);
      }
      return [...tasks].sort((a, b) => a.priority - b.priority);
    }
    if (sortBy === "alphabet") {
      if (sortDirection === "fromAtoZ") {
        return [...tasks].sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      }
      return [...tasks].sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
    }
    if (sortBy === "createdAt") {
      if (sortDirection === "from1to31") {
        return [...tasks].sort(
          (a, b) =>
            new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime()
        );
      }
      return [...tasks].sort(
        (a, b) => new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime()
      );
    }
    if (sortBy === "updatedAt") {
      if (sortDirection === "fromEarliest") {
        return [...tasks].sort(
          (a, b) =>
            new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime()
        );
      }
      return [...tasks].sort(
        (a, b) => new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime()
      );
    }
    return tasks;
  }, [tasks, sortBy, sortDirection]);

  if (isEmptyData) {
    return <TaskListEmptyView />;
  }
  return (
    <ul className={cl.taskListWrapper}>
      {sortedTasks.map((task) => {
        return (
          <Task
            key={task.id}
            taskTitle={task.title}
            priority={task.priority}
            isEditing={editableTaskInfo?.id === task.id}
            onEdit={() => openEditMode(task)}
          />
        );
      })}
    </ul>
  );
};
