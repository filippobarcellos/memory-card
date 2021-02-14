import { useMemory } from './context/useMemory';

//game pages
import Level from './Pages/Level';
import Winner from './Pages/Winner';
import Game from './Pages/Game';

function App() {
  const { won, mode } = useMemory();

  return (
    <main>{won ? <Winner /> : mode === 'start' ? <Game /> : <Level />}</main>
  );
}

export default App;
