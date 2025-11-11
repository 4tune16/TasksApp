import cl from "./sidebar.module.css";
import { Statistic } from "./statistic";

export const Sidebar = () => {
  return (
    <aside className={cl.sidebar}>
      <Statistic />
    </aside>
  );
};
