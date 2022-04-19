window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load

  let deck = buildDeck();
  let dealerHand = [];
  let playerHand = [];

  // DEAL
  document.getElementById("deal-button").addEventListener("click", function () {
    let card = removeCardFromDeck(deck);

    // The DEALER and PLAYER should each get 2 cards
    playerHand.push(card);
    dealerHand.push(card);
    playerHand.push(card);
    dealerHand.push(card);
    console.log(playerHand);
    console.log(dealerHand);
  });

  // HIT
  document.getElementById("hit-button").addEventListener("click", function () {
    console.log("It works");
  });
  
  // STAND
  document.getElementById("stand-button").addEventListener("click", function () {
    console.log("It works");
  });
});