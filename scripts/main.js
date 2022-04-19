window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load

  let deck = buildDeck();
  let dealerHand = [];
  let playerHand = [];
  let dealerId = document.getElementById("dealer-hand");
  let playerId = document.getElementById("player-hand");

  // DEAL
  document.getElementById("deal-button").addEventListener("click", function () {

    // The DEALER and PLAYER should each get 2 cards
    playerHand.push(removeCardFromDeck(deck));
    dealerHand.push(removeCardFromDeck(deck));
    playerHand.push(removeCardFromDeck(deck));
    dealerHand.push(removeCardFromDeck(deck));

    for (let i=0; i < dealerHand.length; i++) {
      let cardImage = getCardImage(dealerHand[i]);
      dealerId.appendChild(cardImage);
    }

    for (let i=0; i < playerHand.length; i++) {
      let cardImage = getCardImage(playerHand[i]);
      playerId.appendChild(cardImage);
    }
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