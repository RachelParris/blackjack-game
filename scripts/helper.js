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

    console.log(deck);
    return deck;
}
