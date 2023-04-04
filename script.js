  /*----- constants -----*/
//   const cardVals = [2,3,4,5,6,7,8,9,10,'j','q','k','a'];
//   const cardSuits = ['c','h','s','d'];
  
  const cards = ['a-c','2-c', '3-c', '4-c','5-c','6-c','7-c','8-c','9-c','10-c','j-c','q-c','k-c',
                 'a-h','2-h', '3-h', '4-h','5-h','6-h','7-h','8-h','9-h','10-h','j-h','q-h','k-h',
                 'a-s','2-s', '3-s', '4-s','5-s','6-s','7-s','8-s','9-s','10-s','j-s','q-s','k-s',
                 'a-d','2-d', '3-d', '4-d','5-d','6-d','7-d','8-d','9-d','10-d','j-d','q-d','k-d'];

  /*----- state variables -----*/
  let playerHand;
  let dealerHand;

  let wager;


  /*----- cached elements  -----*/


  /*----- event listeners -----*/
  document.getElementById('stay').addEventListener('click', stay)
  document.getElementById('hit').addEventListener('click', hit)
  document.getElementById('newGame').addEventListener('click', newGame)


  /*----- functions -----*/
  function shuffleCards() {
    for (let i = 0; i < cards.length; i++) {
      let shuffle = Math.floor(Math.random() * cards.length);
      let temp = cards[i];
      cards[i] = cards[shuffle];
      cards[shuffle] = temp;
    } 
  };

  function getCard() {
    //while (playerHand<21) {
      let randIdx = Math.floor(Math.random() * cards.length); // use this Rand to also generate img
      let cardIdx = cards[randIdx].split("-");
      let cardVal = cardIdx[0];

      if (cardVal === 'a') {
        return 11
      } else if (cardVal === 'j' || cardVal === 'k' || cardVal === 'q') {
        return 10
      } return parseInt(cardVal) 

      function getCardImg () {
        //Here I want to get the corresponding card Img to whichever number was rendered thru the randomization function above
      }
  };

  function hit() {
    alert("you Hit")
  };
  function stay() {
    alert("you stood")
  };
  function newGame() {
    playerHand = getCard() + getCard(); 
    alert(playerHand);
  };