import useSound from 'use-sound';
import { createContext, useContext, useEffect, useState } from 'react';
import initializeCards from '../utils/generateCards';
import flipp from '../assets/flipp.mp3';
import score from '../assets/score.mp3';

const MemoryContext = createContext();

const useMemory = () => useContext(MemoryContext);

const MemoryProvider = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState({});
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);
  const [mode, setMode] = useState('');
  const [moviments, setMoviments] = useState(0);
  const [notMatch, setNotMatch] = useState(false);

  useEffect(() => {
    if (selectedLevel) setCards(initializeCards(selectedLevel));
  }, [selectedLevel]);

  useEffect(() => {
    if (mode === 'start' && moviments > 1 && solved.length === cards.length) {
      setWon(true);
    }
  }, [mode, solved, cards.length, moviments]);

  const [playActive] = useSound(flipp, { volume: 0.45 });
  const [playScore] = useSound(score, { volume: 0.45 });

  function handleClick(id) {
    playActive();
    setMoviments((state) => state + 1);
    //assim que clicar clicar em dois cards
    setDisabled(true);
    setNotMatch(false);
    //caso seja o primeiro clique
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped((state) => [...state, id]);
      //checar se deu match, caso seja marcar como resolvido
      if (isMatch(id)) {
        playScore();
        setSolved((state) => [...state, flipped[0], id]);
        resetCards();
      } else {
        setNotMatch(true);
        setTimeout(resetCards, 2000);
      }
    }
  }

  function resetCards() {
    setFlipped([]);
    setDisabled(false);
    setNotMatch(false);
  }

  function isMatch(id) {
    const clickedCard = cards.find((c) => c.id === id);
    const flippedCard = cards.find((c) => c.id === flipped[0]);

    return flippedCard.type === clickedCard.type;
  }

  function sameCardClicked(id) {
    return flipped.includes(id);
  }

  function restartGame(selectedLevel) {
    setWon(false);
    resetCards();
    setSolved([]);
    setSelectedLevel(selectedLevel);
    setMode('start');
    setMoviments(0);
  }

  return (
    <MemoryContext.Provider
      value={{
        cards,
        selectedLevel,
        setSelectedLevel,
        flipped,
        solved,
        disabled,
        won,
        handleClick,
        resetCards,
        restartGame,
        setMode,
        mode,
        moviments,
        notMatch,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
};

export { useMemory, MemoryProvider };
