import { mergeClasses } from "@/utils/mergeClasses";
import cl from "./footer.module.css";

export const Footer = ({ className, children }) => {
  return (
    <footer className={mergeClasses(cl.footer, className)}>{children}</footer>
  );
};
