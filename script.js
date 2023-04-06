  /*----- constants -----*/
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

  function getCard(cardDispEl) {
    let randIdx = Math.floor(Math.random() * cards.length); // use this Rand to also generate img
    let cardIdx = cards[randIdx].split("-");
    let cardVal = cardIdx[0];

    let cardImg = document.createElement("img")
    cardImg.src = ("/cards/" + cards[randIdx] + ".png")
    document.getElementById(cardDispEl).appendChild(cardImg);

    if (cardVal === 'a') {
      return 11
    } else if (cardVal === 'j' || cardVal === 'k' || cardVal === 'q') {
      return 10
    } return parseInt(cardVal) 
  };

  function hit() {
    //player gets another card, call getCard()?
    playerHand += getCard('playerCards');
    //card is added to playerTotal and value is compared // another compare() ?
     //if playerTotal===21 message "player wins"
    if (playerHand === 21) {
      alert('You got Blackjack Babyyy!!')
    } else if (playerHand > 21) { //else if playerTotal > 21 message "dealer wins"
      alert('Too High, dealer WINS!')
    }
  };
  function stay() {
    //backImg disables
    document.getElementById('backImg').style.visibility = "hidden";
    //hit button inactivates/disabled
    //dealerHand is updated with a getCard()
    dealerHand += getCard('dealerCards');
    //dealerHand is compared
          //if (dealerHand === 21) "dealer wins!"
          //else if (dealerHand > 21) "too high, player wins"
          // else if (dealerHand >= 17) compare();
          // else repeat getCard();


          
    if (dealerHand === 21) {
      alert("Blackjack for the dealer!")
    } else if (dealerHand >= 17) {
      if (dealerHand > playerHand) {
        alert("Dealer Wins") 
      } else {
          alert("Player Wins!")
        }
      } else {
        do { dealerHand += getCard('dealerCards');
        } while (dealerHand < 22)
      }





  };
  function newGame() {
    dealerHand = getCard('dealerCards');
    playerHand = getCard('playerCards') + getCard('playerCards');
    let ngBtnVis = document.getElementById('newGame');
    ngBtnVis.style.visibility = 'hidden';
    if (playerHand === 21) {
      alert("Blackjack babyyyy")
      //RESTRAT NEW GAME, write new function or new render???
    };
  };