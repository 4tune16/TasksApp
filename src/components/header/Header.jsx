import { useTaskEditorInfoContext } from "@/contexts/TaskEditorInfoContext";
import { Button } from "../button";
import { ContentContainer } from "../contentContainer";
import { Icon } from "../icon";
import { Logo } from "../logo";
import { ThemeSwitcher } from "../themeSwitcher";
import cl from "./header.module.css";

export const Header = () => {
  const { openCreateMode } = useTaskEditorInfoContext();

  return (
    <header className={cl.header}>
      <ContentContainer className={cl.headerContentContainer}>
        <Logo />
        <div className={cl.headerActiveBlock}>
          <Button
            contentLeft={<Icon name={"plus"} />}
            onClick={openCreateMode}>
            Создать
          </Button>
          <ThemeSwitcher />
        </div>
      </ContentContainer>
    </header>
  );
};
