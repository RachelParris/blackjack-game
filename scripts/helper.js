function buildDeck () {
    let deck = [];

    // i = suits; j = cards within the suit
    for (let i=0; i < 4; i++) {
        for (let j=1; j <= 13; j++) {
            
            if (i === 0) {
                deck.push({rank: j, suit: "hearts"});
            } else if (i === 1) {
                deck.push({rank: j, suit: "spades"});
            } else if (i === 2) {
                deck.push({rank: j, suit: "diamonds"});
            } else {
                deck.push({rank: j, suit: "clubs"});
            }
        }
    }

    return deck;
}

function removeCardFromDeck (deck) {
    // Pick a random number between 0 - 52 then remove that particular card from the deck
    let number = Math.floor(Math.random() * deck.length);
    let card = deck.splice(number, 1);

    return card;
}

function getCardImage () {
    // images/{rank}_of_{suit}.png
    // <img src="/page/images/5_of_hearts.png" alt="5 of hearts" />
}