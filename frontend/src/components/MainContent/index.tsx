import CultureChartCard from './CultureChartCard';
import SoilUsageChartCard from './SoilUsageChartCard';
import StateChartCard from './StateChartCard';
import TotalDataCard from './TotalDataCard';

import classes from './MainContent.module.css';

export default function MainContent() {
  return (
    <main className={classes.mainContent}>
      <TotalDataCard />
      <StateChartCard />
      <CultureChartCard />
      <SoilUsageChartCard />
      {/* TODO: grid layout of cards */}
      {/* TODO: generic card component w/ title */}
      {/* TODO: individual cards */}
    </main>
  );
}
