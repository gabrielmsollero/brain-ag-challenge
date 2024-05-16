import Chart from 'react-google-charts';

import Card from '../../UI/Card';

export const data = [
  ['Culture', 'Total farming area (ha)'],
  ['Soja', 11],
  ['Milho', 2],
  ['Algodão', 2],
  ['Café', 2],
  ['Cana de Açúcar', 7],
];

export const options = {
  legend: 'none',
};

export default function CultureChartCard() {
  return (
    <Card title="Culture Chart">
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
