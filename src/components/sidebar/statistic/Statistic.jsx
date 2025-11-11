import { StatisticEmptyView } from "./StatisticEmptyView";

export const Statistic = () => {
  const isEmptyViewData = true;

  if (isEmptyViewData) {
    return <StatisticEmptyView />;
  }
  return <div>Statistic</div>;
};
