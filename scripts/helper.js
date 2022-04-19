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

    return card[0];
}

function getCardImage (card) {
    let image = document.createElement("img");

    if (card.rank === 1) {
        image.src = `images/ace_of_${card.suit}.png`;
        image.alt = `${card.rank} of ${card.suit}`;
        return image;
    } else if (card.rank === 11) {
        image.src = `images/jack_of_${card.suit}.png`;
        image.alt = `${card.rank} of ${card.suit}`;
        return image;
    } else if (card.rank === 12) {
        image.src = `images/queen_of_${card.suit}.png`;
        image.alt = `${card.rank} of ${card.suit}`;
        return image;
    } else if (card.rank === 13) {
        image.src = `images/king_of_${card.suit}.png`;
        image.alt = `${card.rank} of ${card.suit}`;
        return image;
    }

    image.src = `images/${card.rank}_of_${card.suit}.png`;
    image.alt = `${card.rank} of ${card.suit}`;
    return image;
}
