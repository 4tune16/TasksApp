import { mergeClasses } from "@/utils/mergeClasses";
import { Icon } from "../icon";
import cl from "./iconButton.module.css";

export const IconButton = ({
  className,
  view = "second", // "second" || "negative"
  size = "small", // "small"  || "medium"
  type = "button",
  as = "button",
  isLoading = false,
  disabled,
  iconName,
  ...restProps
}) => {
  const Component = as;
  return (
    <Component
      className={mergeClasses(
        cl.iconButton,
        className,
        cl[view],
        size === "small" && cl.small,
        size === "medium" && cl.medium,
        isLoading && cl.loading
      )}
      type={type}
      disabled={disabled}
      {...restProps}>
      {isLoading ? (
        <Icon
          className={cl.loadingIcon}
          name={"loading"}
        />
      ) : (
        <Icon name={iconName} />
      )}
    </Component>
  );
};
