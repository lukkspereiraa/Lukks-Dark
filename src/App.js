import style from 'styled-components';
import Heder from './components/Heder';
import Pesquisa from './components/Pesquisa';
import UtimosLancamentos from './components/MasiVendidos';
// estilizaçao como componenet
const AppContainer = style.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#519872 ,#3B5249 );
  `


function App() {
  return (
    <AppContainer>
      <Heder/>
      <Pesquisa/>
      <UtimosLancamentos/>
    </AppContainer>
  );
}

export default App;
