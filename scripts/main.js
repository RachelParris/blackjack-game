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

    displayPoints(dealer);
    displayPoints(player);
  });

  // HIT
  document.getElementById("hit-button").addEventListener("click", function () {
    // PLAYER gets another card
    player.hand.push(removeCardFromDeck(deck));
    renderHand(player.hand, player.name);

    // Calculate and display points
    player.points = calculatePoints(player.hand);
    dealer.points = calculatePoints(dealer.hand);

    displayPoints(dealer);
    displayPoints(player);
  });
  
  // STAND
  document.getElementById("stand-button").addEventListener("click", function () {
    // Calculate and display points
    player.points = calculatePoints(player.hand);
    dealer.points = calculatePoints(dealer.hand);

    displayPoints(dealer);
    displayPoints(player);
  });
});