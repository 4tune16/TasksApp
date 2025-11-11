import { ContentContainer } from "../contentContainer";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import cl from "./content.module.css";

export const Content = ({ mainContent, ...restProps }) => {
  return (
    <div
      className={cl.content}
      {...restProps}>
      <ContentContainer className={cl.contentContainer}>
        <Navbar />
        <main className={cl.mainContentWrapper}>{mainContent}</main>
        <Sidebar />
      </ContentContainer>
    </div>
  );
};
