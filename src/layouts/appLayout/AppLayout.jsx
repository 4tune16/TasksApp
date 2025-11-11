import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { TaskEditor } from "@/components/taskEditor";
import { useTaskEditorInfoContext } from "@/contexts/TaskEditorInfoContext";
import { useThemeContext } from "@/contexts/ThemeContext";
import { IncomingTasks } from "@/pages/IncomingTasks";
import { mergeClasses } from "@/utils/mergeClasses";
import cl from "./appLayout.module.css";

export const AppLayout = () => {
  const { theme } = useThemeContext();
  const {
    taskEditorInfo: { taskEditorOpened, editableTaskInfo, type },
    closeEditor,
  } = useTaskEditorInfoContext();
  return (
    <div className={mergeClasses(cl.appLayout, `${theme}Theme`)}>
      <Header />
      <Content mainContent={<IncomingTasks />} />
      <TaskEditor
        taskEditorOpened={taskEditorOpened}
        editableTaskInfo={editableTaskInfo}
        type={type}
        closeEditor={closeEditor}
      />
    </div>
  );
};
