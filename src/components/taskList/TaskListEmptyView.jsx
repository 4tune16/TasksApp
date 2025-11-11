import { Illustration } from "../illustration";
import cl from "./taskListEmptyView.module.css";

export const TaskListEmptyView = () => {
  return (
    <div className={cl.taskListEmptyView}>
      <h2 className={cl.title}>Все твои задачи организованы как надо</h2>
      <p className={cl.subtitle}>Отличная работа! Ты большой молодец!</p>
      <Illustration name={"empty"} />
    </div>
  );
};
