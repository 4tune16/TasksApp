import { Footer } from "@/components/footer";
import { MainContainer } from "@/components/mainContainer";
import { TaskList } from "@/components/taskList";
import { TasksSortDropdown } from "@/components/tasksSortDropdown";
import cl from "./incomingTasks.module.css";

export const IncomingTasks = () => {
  return (
    <div className={cl.incomingTasksContainer}>
      <MainContainer
        title={"Входящие"}
        actionsRight={<TasksSortDropdown />}
        body={<TaskList />}
      />

      <Footer>
        <p className={cl.footerText}>Проект выполнен 4tune16</p>
      </Footer>
    </div>
  );
};
