import AddFarmButton from '../UI/AddFarmButton';
import Card from '../UI/Card';
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
      <Card title="TODO">
        <ul>
          <li>Organizar melhor layout dos cards</li>
          <li>Tabela: fuzzy search, paginação, ordenação, formatação</li>
          <li>Tabela: disposição do uso da área no formato de barra</li>
          <li>Tabela: disposição das culturas usando toasts</li>
          <li>Contexto (ou redux) de dados</li>
          <li>Conexão dos componentes ao contexto p buscar dados</li>
          <li>Responsividade form</li>
          <li>Fechar modal ao clicar fora</li>
          <li>Botão para atualizar gráficos</li>
          <li>Testes automatizados</li>
          <li>Consertar estilização selects</li>
          <li>Animations</li>
          <li>Dark/light themes</li>
          <li>Traduções</li>
        </ul>
      </Card>
      <AddFarmButton></AddFarmButton>
    </main>
  );
}
