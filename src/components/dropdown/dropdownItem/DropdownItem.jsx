import cl from "./dropdownItem.module.css";

export const DropdownItem = ({
  contentLeft,
  label,
  contentRight,
  onSelect,
  onClick,
  onKeyDown,
  ...restProps
}) => {
  const selectHandler = () => {
    if (onSelect) {
      onSelect?.();
    }
  };

  return (
    <li
      className={cl.dropdownItem}
      tabIndex={0}
      onClick={(e) => {
        onClick?.(e);
        selectHandler();
      }}
      onKeyDown={(e) => {
        onKeyDown?.(e);
        if (e.code === "Enter") {
          selectHandler();
        }
      }}
      {...restProps}>
      <span className={cl.contentLeft}>{contentLeft}</span>
      {label}
      <span className={cl.contentRight}>{contentRight}</span>
    </li>
  );
};
