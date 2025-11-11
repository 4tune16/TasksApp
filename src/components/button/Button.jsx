import { mergeClasses } from "@/utils/mergeClasses";
import { Icon } from "../icon";
import cl from "./button.module.css";

export const Button = ({
  className,
  view = "base",
  size = "medium",
  type = "button",
  fullWidth = false,
  as = "button",
  isLoading = false,
  disabled,
  isActive,
  children,
  contentLeft,
  contentRight,
  ...restProps
}) => {
  const Component = as;
  return (
    <Component
      type={type}
      disabled={disabled}
      {...restProps}
      className={mergeClasses(
        cl.button,
        className,
        cl[view],
        fullWidth && cl.fullWidth,
        size === "small" && cl.small,
        size === "large" && cl.large,
        isLoading && cl.loading,
        isActive && cl.active
      )}>
      {isLoading && (
        <Icon
          name={"loading"}
          className={cl.loadingIcon}
        />
      )}
      {contentLeft && <span className={cl.contentLeft}>{contentLeft}</span>}
      {children}
      {contentRight && <span className={cl.contentRight}>{contentRight}</span>}
    </Component>
  );
};
