const cards = [
  '\u{1F408}',
  '\u{1F412}',
  '\u{1F40A}',
  '\u{1F416}',
  '\u{1F41B}',
  '\u{1F41C}',
  '\u{1F41D}',
  '\u{1F438}',
];

function shuffle(arr) {
  const _arr = [...arr];

  for (let i = 0; i < arr.length - 1; i++) {
    let idx = Math.floor(Math.random() * (i + 1));
    let temp = _arr[i];
    _arr[i] = _arr[idx];
    _arr[idx] = temp;
  }

  return _arr;
}

export default function initializeCards(level) {
  let id = 0;

  const choosenCards = cards.splice(0, level).reduce((acc, type) => {
    acc.push({
      id: id++,
      type,
    });
    acc.push({
      id: id++,
      type,
    });
    return acc;
  }, []);
  return shuffle(choosenCards);
}
