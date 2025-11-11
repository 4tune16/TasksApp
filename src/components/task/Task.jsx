import { mergeClasses } from "@/utils/mergeClasses";
import { Checkbox } from "../checkbox";
import { IconButton } from "../iconButton";
import cl from "./task.module.css";

const checkboxViewObj = {
  1: "gray",
  2: "purple",
  3: "pink",
};

export const Task = ({
  taskTitle,
  className,
  priority,
  onEdit,
  isEditing,
  ...restProps
}) => {
  return (
    <li
      tabIndex={0}
      className={mergeClasses(
        cl.taskContainer,
        isEditing && cl.active,
        className
      )}
      {...restProps}>
      <span className={cl.taskCheckbox}>
        <Checkbox view={checkboxViewObj[priority]} />
      </span>
      <span className={cl.taskTitle}>{taskTitle}</span>
      {onEdit && (
        <IconButton
          className={cl.taskEditIconButton}
          iconName="edit"
          onClick={onEdit}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              onEdit();
            }
          }}
        />
      )}
    </li>
  );
};
