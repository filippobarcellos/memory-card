import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import * as S from './styles';

function Home() {
  const onLevelClick = (e) => {
    console.log(e.target.value);
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
