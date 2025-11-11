import { mergeClasses } from "@/utils/mergeClasses";
import cl from "./contentContainer.module.css";

export const ContentContainer = ({ children, className, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={mergeClasses(cl.contentContainer, className)}>
      {children}
    </div>
  );
};
