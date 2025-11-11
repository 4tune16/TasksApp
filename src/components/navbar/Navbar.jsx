import { Icon } from "../icon";
import cl from "./navbar.module.css";
import { NavbarItem } from "./navbarItem";

export const Navbar = () => {
  return (
    <nav className={cl.navbar}>
      <ul className={cl.navbarList}>
        <NavbarItem
          contentLeft={<Icon name={"inbox"} />}
          href="/">
          Входящие
        </NavbarItem>
      </ul>
    </nav>
  );
};
