import { useTasksContext } from "@/contexts/TasksContext";
import { mergeClasses } from "@/utils/mergeClasses";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { Icon } from "../icon";
import { IconButton } from "../iconButton";
import { Input } from "../input/Input";
import cl from "./taskEditor.module.css";

export const TaskEditor = ({
  taskEditorOpened,
  editableTaskInfo,
  type,
  closeEditor,
}) => {
  const { addTask, updateTask, deleteTask } = useTasksContext();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [priorityNum, setPriorityNum] = useState(1);
  const refTaskTitleInput = useRef(null);

  useEffect(() => {
    if (taskEditorOpened) {
      setTimeout(() => {
        refTaskTitleInput.current?.focus?.();
      }, 100);
    }
  }, [taskEditorOpened, type]);

  useEffect(() => {
    if (editableTaskInfo) {
      setNewTaskTitle(editableTaskInfo.title);
      setPriorityNum(editableTaskInfo.priority);
    } else {
      setNewTaskTitle("");
      setPriorityNum(1);
    }
  }, [editableTaskInfo]);

  const closeHandler = () => {
    setNewTaskTitle("");
    setPriorityNum(1);
    closeEditor();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const clearNewTaskTitle = newTaskTitle.trim();
    if (type === "edit" && editableTaskInfo) {
      const updTask = {
        ...editableTaskInfo,
        title: clearNewTaskTitle,
        priority: priorityNum,
      };
      updateTask(updTask);
    } else {
      addTask(clearNewTaskTitle, priorityNum);
    }

    closeHandler();
  };

  const deleteHandler = () => {
    deleteTask(editableTaskInfo.id);
    closeHandler();
  };

  const isNewTaskTitleEmpty = newTaskTitle.trim().length === 0;
  const isEditModeAndTaskUnchanged =
    type === "edit" &&
    editableTaskInfo?.title?.trim?.() === newTaskTitle?.trim() &&
    editableTaskInfo?.priority === priorityNum;

  return (
    <div
      className={mergeClasses(
        cl.taskEditorContainer,
        taskEditorOpened && cl.opened
      )}>
      <form
        className={cl.createTaskBlock}
        id="createTaskForm"
        onSubmit={submitHandler}>
        <div className={cl.createTaskBlockTop}>
          <h1 className={cl.createTaskBlockTitle}>
            {type === "create" ? "Создание задачи" : "Редактирование"}
          </h1>
          <Input
            ref={refTaskTitleInput}
            label="Название"
            type="text"
            id="newTaskInput"
            value={newTaskTitle}
            required={true}
            autoComplete="off"
            placeholder="Название задачи"
            labelProps={{ className: cl.createTaskBlockInput }}
            onClear={() => {
              setNewTaskTitle("");
              refTaskTitleInput.current.focus();
            }}
            onChange={(event) => setNewTaskTitle(event.target.value)}
          />
        </div>
        <div className={cl.content}>
          <label
            htmlFor="newTaskPriority"
            className={cl.priorityLabel}>
            Приоритет
            <input
              id="newTaskPriority"
              className="visuallyHidden"
              type="number"
              role="combobox"
              value={priorityNum}
              tabIndex={-1}
              onChange={(event) => setPriorityNum(event.target.value)}
            />
            <div className={cl.priorityBtnsContainer}>
              <Button
                view="gray"
                size="small"
                isActive={priorityNum === 1}
                onClick={() => setPriorityNum(1)}>
                <Icon name="minus" />
              </Button>
              <Button
                view="purple"
                size="small"
                isActive={priorityNum === 2}
                onClick={() => setPriorityNum(2)}>
                <Icon name="chevron" />
              </Button>
              <Button
                view="pink"
                size="small"
                isActive={priorityNum === 3}
                onClick={() => setPriorityNum(3)}>
                <Icon name="doubleChevron" />
              </Button>
            </div>
          </label>
        </div>
      </form>
      <div className={cl.controlSection}>
        <Button
          form="createTaskForm"
          type="submit"
          view="primary"
          disabled={isNewTaskTitleEmpty || isEditModeAndTaskUnchanged}
          size="large">
          {type === "create" ? "Создать" : "Сохранить"}
        </Button>
        <Button
          view="secondary"
          size="large"
          onClick={closeHandler}>
          Отмена
        </Button>
        {type === "edit" && (
          <IconButton
            className={cl.controlSectionDeleteButton}
            size="medium"
            iconName="bin"
            view="negative"
            onClick={deleteHandler}
          />
        )}
      </div>
    </div>
  );
};
