import { useThemeContext } from "@/contexts/ThemeContext";
import { mergeClasses } from "@/utils/mergeClasses";
import { Icon } from "../icon";
import cl from "./themeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <label
      htmlFor="darkLightSwitch"
      className={cl.themeSwitcher}>
      Переключение темы на темную
      <input
        id="darkLightSwitch"
        className="visuallyHidden"
        type="checkbox"
        role="switch"
        checked={theme === "dark"}
        onChange={toggleTheme}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            toggleTheme();
          }
        }}
      />
      <div className={mergeClasses(cl.themeSwitcherVisible, cl[theme])}>
        <Icon
          name={"sun"}
          className={cl.themeSwitcherLightIcon}
        />
        <span className={cl.themeSwitcherToggler} />
        <Icon
          name={"moon"}
          className={cl.themeSwitcherDarkIcon}
        />
      </div>
    </label>
  );
};
