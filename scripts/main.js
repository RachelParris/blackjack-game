window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load

  let deck = buildDeck();
  let dealer = {
    name: "dealer",
    hand: [],
    points: 0
  }
  let player = {
    name: "player",
    hand: [],
    points: 0
  }

  // DEAL
  document.getElementById("deal-button").addEventListener("click", function () {
    // Use the shuffle function to shuffle the deck when you hit the deal button but before you deal the cards.
    // let shuffledDeck = shuffleDeck(deck);

    // The DEALER and PLAYER should each get 2 cards
    player.hand.push(removeCardFromDeck(deck));
    dealer.hand.push(removeCardFromDeck(deck));
    player.hand.push(removeCardFromDeck(deck));
    dealer.hand.push(removeCardFromDeck(deck));

    renderHand(dealer.hand, dealer.name);
    renderHand(player.hand, player.name);
  });

  // HIT
  document.getElementById("hit-button").addEventListener("click", function () {
    player.hand.push(removeCardFromDeck(deck));
    renderHand(player.hand, player.name);
  });
  
  // STAND
  document.getElementById("stand-button").addEventListener("click", function () {
    console.log("It works");
  });
});