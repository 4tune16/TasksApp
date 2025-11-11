import { useTasksSortCriterionContext } from "@/contexts/TasksSortCriterionContext";
import { lowercaseFirstLetter } from "@/utils/lowercaseFirstLetter";
import { useState } from "react";
import { Dropdown } from "../dropdown";
import { Icon } from "../icon";
import cl from "./tasksSortDropdown.module.css";

const labelTransform = (text) => {
  return `По ${lowercaseFirstLetter(text)}`;
};

export const TasksSortDropdown = () => {
  const { tasksSortCriterion, setTasksSortCriterion, criteriaArr } =
    useTasksSortCriterionContext();
  const [isDirty, setIsDirty] = useState(false);

  const changeHandler = (option) => {
    setTasksSortCriterion(option);
    setIsDirty(true);
  };

  return (
    <Dropdown
      listTitle="Сортировка по:"
      listTitleContentLeft={<Icon name="filter" />}
      contentLeft={<Icon name={tasksSortCriterion.iconName} />}
      label={labelTransform(tasksSortCriterion.label)}
      buttonProps={{ className: cl.tasksDropdownBtn }}
      selected={isDirty}
      options={criteriaArr}
      value={tasksSortCriterion}
      onChange={changeHandler}
    />
  );
};
