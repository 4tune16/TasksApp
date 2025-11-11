import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { mergeClasses } from "@/utils/mergeClasses";
import cl from "./icon.module.css";
import * as allIconsObj from "./icons";

export const Icon = ({ name, className, svgProps, ...restProps }) => {
  const fullIconName = `Icon${capitalizeFirstLetter(name)}`;
  const IconComponent = allIconsObj[fullIconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <span
      className={mergeClasses(cl.iconWrapper, className)}
      {...restProps}>
      <IconComponent {...svgProps} />
    </span>
  );
};
