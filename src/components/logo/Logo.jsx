import { Icon } from "../icon";
import cl from "./logo.module.css";

export const Logo = () => {
  return (
    <a
      href="/"
      className={cl.logoLink}
      onClick={(e) => e.preventDefault()}>
      <Icon
        className={cl.logoLinkIcon}
        name={"logo"}
      />
    </a>
  );
};
