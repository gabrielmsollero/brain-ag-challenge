import Card from '../../UI/Card';
import FarmsTableFilter from '../../FarmsTable/FarmsTableFilter';
import FarmsTable from '../../FarmsTable/FarmsTable';

export default function FarmsTableCard() {
  return (
    <Card title="Farms">
      <FarmsTableFilter />
      <FarmsTable />
    </Card>
  );
}
