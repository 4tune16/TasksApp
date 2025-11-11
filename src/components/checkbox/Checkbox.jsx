import { mergeClasses } from "@/utils/mergeClasses";
import cl from "./checkbox.module.css";

export const Checkbox = ({ view, className }) => {
  return (
    <input
      type="checkbox"
      className={mergeClasses(cl.checkbox, cl[view], className)}
    />
  );
};
