export type Card = {
    name: string;
    isUp: boolean;
    isPaired: boolean;
}

export function createCards(): Card[]{
    return cardNameSupplier().map((cardName: string) => ({ name: cardName, isUp: false, isPaired: false }))
}

function cardNameSupplier(): string[] {
    const origCards: string[] = createCardNames(19);
    const cards: string[] = [];
    for(let i = 0; i < 10; i++) {
        const randIdx = Math.floor(Math.random()*origCards.length);
        cards.push(origCards[randIdx]);
        cards.push(origCards[randIdx]);
        origCards.splice(randIdx, 1);
    }
    for(let i = 0; i < 20; i++) {
        const randIdx1 = Math.floor(Math.random()*cards.length);
        const randIdx2 = Math.floor(Math.random()*cards.length);
        const card = cards.splice(randIdx1, 1)[0];
        cards.splice(randIdx2, 0, card);
    }

    return cards;
}

function createCardNames(cardNum: number): string[] {
    return Array.from({ length: cardNum }, (_, i) => "card" + i + ".svg");
}