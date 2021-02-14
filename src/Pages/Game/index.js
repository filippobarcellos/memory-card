import { useMemory } from '../../context/useMemory';
import Board from '../../components/Board';

import * as S from './styles';
import Logo from '../../components/Logo';

function Game() {
  const { moviments, restartGame, selectedLevel } = useMemory();

  return (
    <S.GameContainer>
      <Logo />

      <S.Info>
        <span>{`${moviments} ${
          moviments === 1 ? 'movimento' : 'movimentos'
        }`}</span>
        <button onClick={() => restartGame(selectedLevel)}>🔄</button>
      </S.Info>

      <Board />

      <S.Nivel>
        <span>Nivel:</span>
        {selectedLevel === '2' ? (
          <strong className="easy">Facil - 4</strong>
        ) : selectedLevel === '4' ? (
          <strong className="normal">Normal - 8</strong>
        ) : (
          <strong className="hard">Dificil - 16</strong>
        )}
      </S.Nivel>
    </S.GameContainer>
  );
}

export default Game;
