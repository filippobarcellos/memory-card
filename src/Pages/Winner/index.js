import { useMemory } from '../../context/useMemory';

import Button from '../../components/Button';
import logo from '../../assets/logo.svg';
import * as S from './styles';

function Winner() {
  const { restartGame, selectedLevel, moviments } = useMemory();

  return (
    <S.Container>
      <S.Signal>✅</S.Signal>

      <div>
        <p>Parabéns! Voce conseguiu!</p>

        <span>Com {moviments} movimentos</span>
      </div>

      <Button onClick={() => restartGame(selectedLevel)}>
        Jogar novamente
      </Button>

      <img src={logo} alt="VivaMemory" />
    </S.Container>
  );
}

export default Winner;
