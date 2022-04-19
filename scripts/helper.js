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

function shuffleDeck(deck) {
    // For fixed number of times, randomly choose 2 cards within the deck and swap them.
    // Create a new array, randomly choose one card after another from the original array and push it to the new array.
    // Search on StackOverflow for a solution to "shuffle a javascript array"
    let shuffledDeck = [];
    return shuffledDeck;
}

function removeCardFromDeck (deck) {
    // Pick a random number between 0 - 52 then remove that particular card from the deck
    let randomCard = Math.floor(Math.random() * deck.length);
    let card = deck.splice(randomCard, 1);

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

function renderHand (hand, id) {
    if (hand.length > 2) {
        let cardImage = getCardImage(hand[hand.length - 1]);
        document.getElementById(`${id}-hand`).appendChild(cardImage);
        return;
    }

    for (let i=0; i < hand.length; i++) {
        let cardImage = getCardImage(hand[i]);
        document.getElementById(`${id}-hand`).appendChild(cardImage);
    }
}

function calculatePoints (cards) {
    // takes in an array of card objects and returns the points for that hand
    let points = 0;
    
    for (let i=0; i < cards.length; i++) {
        if (cards[i].rank > 10 ){
            // Jokers, Kings, Queens (11-13) are 10 points each
            points = points + 10;
            continue;
        }
        points = points + cards[i].rank;
    }
    console.log(points);
    return points
}

function displayPoints (player) {
    // <span id="player-points" class="points"></span>
    let points = player.points;
    let id = player.name;

    document.getElementById(`${id}-points`).innerHTML = `${player.points}`;
}