import { TaskEditorInfoContextProvider } from "./contexts/TaskEditorInfoContext";
import { TasksContextProvider } from "./contexts/TasksContext";
import { TasksSortCriterionContextProvider } from "./contexts/TasksSortCriterionContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AppLayout } from "./layouts/appLayout";

export const App = () => {
  return (
    <ThemeContextProvider>
      <TaskEditorInfoContextProvider>
        <TasksContextProvider>
          <TasksSortCriterionContextProvider>
            <AppLayout />
          </TasksSortCriterionContextProvider>
        </TasksContextProvider>
      </TaskEditorInfoContextProvider>
    </ThemeContextProvider>
  );
};
