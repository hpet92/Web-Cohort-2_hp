// Copy and paste js here
function drawAceOfSpades() {
  let deckId = document.getElementById("deck").textContent;
  let hand = document.getElementById("hand");
  hand.innerHTML = "";

  function drawUntilAceOfSpades() {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cards.length === 0) {
          // Reshuffle if deck is empty
          return fetch(
            `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`
          ).then(() => drawUntilAceOfSpades());
        }

        const card = data.cards[0];
        const image = document.createElement("img");
        image.src = card.image;
        hand.appendChild(image);

        if (card.code !== "AS") {
          drawUntilAceOfSpades();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  drawUntilAceOfSpades();
}
