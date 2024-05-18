import AddFarmDialog from './components/AddFarm/AddFarmDialog';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

import UiContextProvider from './contexts/UiContext';

function App() {
  return (
    <UiContextProvider>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
      <AddFarmDialog></AddFarmDialog>
    </UiContextProvider>
  );
}

export default App;
