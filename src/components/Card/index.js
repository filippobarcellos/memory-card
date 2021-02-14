import * as S from './styles';
import back from '../../assets/back.png';

function Card({ handleClick, id, flipped, emoji, disabled, solved, notMatch }) {
  return (
    <S.FlipContainer
      isFlipped={flipped}
      isSolved={solved}
      notMatch={notMatch}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      {flipped || solved ? (
        <div className="card__front">
          <span>{emoji}</span>
        </div>
      ) : (
        <div className="card__back">
          <img src={back} alt="back card" />
        </div>
      )}
    </S.FlipContainer>
  );
}

export default Card;
