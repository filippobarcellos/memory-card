import { useMemory } from '../../context/useMemory';
import Card from '../Card';

import * as S from './styles';

function Board() {
  const {
    cards,
    flipped,
    solved,
    selectedLevel,
    handleClick,
    disabled,
    notMatch,
  } = useMemory();

  return (
    <S.Board selectedLevel={selectedLevel}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          emoji={card.type}
          notMatch={notMatch}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
          disabled={disabled || solved.includes(card.id)}
          solved={solved.includes(card.id)}
        >
          {notMatch && <span>hahahahah</span>}
        </Card>
      ))}
    </S.Board>
  );
}

export default Board;
