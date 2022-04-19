window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load

  let deck = buildDeck();
  let dealerHand = [];
  let playerHand = [];

  // DEAL
  document.getElementById("deal-button").addEventListener("click", function () {
    console.log("It works");
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