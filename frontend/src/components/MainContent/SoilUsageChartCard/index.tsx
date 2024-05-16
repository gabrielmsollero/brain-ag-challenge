import Chart from 'react-google-charts';

import Card from '../../UI/Card';

const data = [
  ['Type of area (farmable vs. vegetation)', 'Total area (ha)'],
  ['Farmable', 11],
  ['Vegetation', 2],
];

const options = {
  legend: 'none',
};

export default function SoilUsageChartCard() {
  return (
    <Card title="Soil Usage Chart">
      <div>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={'100%'}
          height={'300px'}
        />
      </div>
    </Card>
  );
}
