import { Button } from "@/components/button";
import { mergeClasses } from "@/utils/mergeClasses";
import cl from "./navbarItem.module.css";

export const NavbarItem = ({
  className,
  children,
  contentLeft,
  contentRight,
  href = "/",
  ...restProps
}) => {
  return (
    <li
      className={mergeClasses(cl.navbarItem, className)}
      {...restProps}>
      <Button
        view="primary"
        size="small"
        as="a"
        href={href}
        className={cl.navbarItemLink}
        onClick={(e) => e.preventDefault()}
        fullWidth
        contentLeft={contentLeft}
        contentRight={contentRight}>
        {children}
      </Button>
    </li>
  );
};
