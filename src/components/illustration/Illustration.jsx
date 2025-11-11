import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import cl from "./illustration.module.css";
import * as illustrObj from "./illustrations";

export const Illustration = ({ name, svgProps, ...restProps }) => {
  const illustrationFullName = `Illustration${capitalizeFirstLetter(name)}`;

  const IllustrationComponent = illustrObj[illustrationFullName];

  if (!IllustrationComponent) {
    return null;
  }
  return (
    <span
      className={cl.illustrationWrapper}
      {...restProps}>
      <IllustrationComponent {...svgProps} />
    </span>
  );
};
