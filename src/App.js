import './App.css';
import ArmaLaTuya from './components/ArmaLaTuya/ArmaLaTuya';
import Header from './components/Header/Header';
import MasBuscadas from './components/MasBuscadas/MasBuscadas';
import Premuims from './components/Premuims/Premuims';

function App() {
  return (
    <>
      <Header/>
      <MasBuscadas/>
      <Premuims/>
      <ArmaLaTuya />
    </>
  );
}

export default App;
