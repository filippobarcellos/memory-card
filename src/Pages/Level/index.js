import useSound from 'use-sound';
import { useMemory } from '../../context/useMemory';
import buttonClick from '../../assets/buttonClick.mp3';

import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import * as S from './styles';

function Home() {
  const { setSelectedLevel, setMode } = useMemory();

  const [playActive] = useSound(buttonClick, { volume: 0.45 });

  const onLevelClick = (e) => {
    playActive();
    setSelectedLevel(e.target.value);
    setMode('start');
  };

  return (
    <S.Container>
      <img src={logo} alt="VivaMemory" />

      <main>
        <S.ChooseLevel>
          <Button onClick={onLevelClick} value={2}>
            👶 Facil
          </Button>
          <Button onClick={onLevelClick} value={4}>
            👦 Normal
          </Button>
          <Button onClick={onLevelClick} value={8}>
            🤯 Dificil
          </Button>
        </S.ChooseLevel>
      </main>
    </S.Container>
  );
}

export default Home;
