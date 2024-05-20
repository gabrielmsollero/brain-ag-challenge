import AddFarmButton from '../UI/AddFarmButton';
import CultureChartCard from './CultureChartCard';
import FarmsTableCard from './FarmsTableCard';
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
      <div style={{ gridColumn: '1/-1' }}>
        <FarmsTableCard />
      </div>
      <AddFarmButton></AddFarmButton>
    </main>
  );
}
