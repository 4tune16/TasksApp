import { mergeClasses } from "@/utils/mergeClasses";
import { Icon } from "../icon";
import cl from "./input.module.css";

export const Input = ({
  label,
  labelProps,
  required,
  onClear,
  className,
  ...props
}) => {
  return (
    <label
      {...labelProps}
      className={mergeClasses(cl.inputLabel, labelProps?.className)}>
      <span className={mergeClasses(cl.labelText, required && cl.isRequired)}>
        {label}
      </span>
      <input
        className={mergeClasses(
          cl.input,
          className,
          onClear && cl.hasClearIcon
        )}
        required={required}
        {...props}
      />
      {onClear && (
        <Icon
          name="close"
          tabIndex={0}
          className={cl.clearIcon}
          onClick={onClear}
          onKeyDown={(e) => {
            if (e.code === "Enter") onClear();
          }}
        />
      )}
    </label>
  );
};
