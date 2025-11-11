import cl from "./mainContainer.module.css";

export const MainContainer = ({ title, body, actionsRight }) => {
  return (
    <div className={cl.mainContainer}>
      <div className={cl.mainContainerTopBlock}>
        <h1 className={cl.mainContainerTitle}>{title}</h1>
        {actionsRight}
      </div>
      <div className={cl.mainContainerBody}>{body}</div>
    </div>
  );
};
