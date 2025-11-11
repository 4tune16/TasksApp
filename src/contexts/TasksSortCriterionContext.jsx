/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const criteriaArr = [
  {
    id: 0,
    sortBy: "priority",
    sortDirection: "fromUnimportant",
    label: "Приоритету",
    iconName: "fromUnimportant",
  },
  {
    id: 1,
    sortBy: "priority",
    sortDirection: "fromImportant",
    label: "Приоритету",
    iconName: "fromImportant",
  },
  {
    id: 2,
    sortBy: "alphabet",
    sortDirection: "fromAtoZ",
    label: "Алфавиту",
    iconName: "fromAtoZ",
  },
  {
    id: 3,
    sortBy: "alphabet",
    sortDirection: "fromZtoA",
    label: "Алфавиту",
    iconName: "fromZtoA",
  },
  {
    id: 4,
    sortBy: "createdAt",
    sortDirection: "from1to31",
    label: "Дате создания",
    iconName: "from1to31",
  },
  {
    id: 5,
    sortBy: "createdAt",
    sortDirection: "from31to1",
    label: "Дате создания",
    iconName: "from31to1",
  },
  {
    id: 6,
    sortBy: "updatedAt",
    sortDirection: "fromEarliest",
    label: "Дате обновления",
    iconName: "fromNew",
  },
  {
    id: 7,
    sortBy: "updatedAt",
    sortDirection: "fromLatest",
    label: "Дате обновления",
    iconName: "fromOld",
  },
];

const TasksSortCriterionContext = createContext({
  tasksSortCriterion: null,
  setTasksSortCriterion: () => {},
  criteriaArr: criteriaArr,
});

export const useTasksSortCriterionContext = () => {
  const ctx = useContext(TasksSortCriterionContext);

  if (!ctx) {
    throw new Error(
      "useTasksSortCriterionContext must be used in TasksSortCriterionContextProvider"
    );
  }
  return ctx;
};

export const TasksSortCriterionContextProvider = ({ children }) => {
  const [tasksSortCriterion, setTasksSortCriterion] = useState(criteriaArr[4]);

  return (
    <TasksSortCriterionContext
      value={{
        tasksSortCriterion,
        setTasksSortCriterion,
        criteriaArr,
      }}>
      {children}
    </TasksSortCriterionContext>
  );
};
