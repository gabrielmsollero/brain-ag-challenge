import Chart from 'react-google-charts';
import Card from '../../UI/Card';

export const data = [
  ['State', 'Total farming area (ha)'],
  ['SP', 11],
  ['MG', 2],
  ['MT', 2],
  ['MS', 2],
  ['GO', 7],
];

export const options = {
  legend: 'none',
};

export default function StateChartCard() {
  return (
    <Card title="Total farming area per state">
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
