export type Card = {
  idx: number;
  name: string;
  isUp: boolean;
};

export function createCards(cardNumber: number = 20): Card[] {
  return cardNameSupplier(cardNumber).map(
    (cardName: string, index: number) => ({
      idx: index,
      name: cardName,
      isUp: false,
    })
  );
}

function cardNameSupplier(cardNumber: number): string[] {
  const origCards: string[] = createCardNames(19);
  const cards: string[] = [];
  for (let i = 0; i < cardNumber / 2; i++) {
    const randIdx = Math.floor(Math.random() * origCards.length);
    cards.push(origCards[randIdx]);
    cards.push(origCards[randIdx]);
    origCards.splice(randIdx, 1);
  }
  for (let i = 0; i < cardNumber; i++) {
    const randIdx1 = Math.floor(Math.random() * cards.length);
    const randIdx2 = Math.floor(Math.random() * cards.length);
    const card = cards.splice(randIdx1, 1)[0];
    cards.splice(randIdx2, 0, card);
  }

  return cards;
}

function createCardNames(cardNum: number): string[] {
  return Array.from({ length: cardNum }, (_, i) => "card" + i + ".svg");
}
