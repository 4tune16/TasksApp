import { Illustration } from "@/components/illustration";
import cl from "./statisticEmptyView.module.css";

export const StatisticEmptyView = () => {
  return (
    <div className={cl.statisticEmptyView}>
      <Illustration name={"notebook"} />
      <p className={cl.statisticEmptyViewText}>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
        <br />и самочувствие.
      </p>
    </div>
  );
};
