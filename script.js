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
  const dealerEl = document.getElementById('dealerCards');

  let stayBtn = document.getElementById('stay');
  stayBtn.setAttribute("disabled", "");

  let hitBtn = document.getElementById('hit');
  hitBtn.setAttribute("disabled", "");

  let ngBtn = document.getElementById('newGame');

  /*----- event listeners -----*/
  stayBtn.addEventListener('click', stay);
  hitBtn.addEventListener('click', hit);
  ngBtn.addEventListener('click', newGame);

  /*----- functions -----*/
  function getCard(cardDispEl) {
    let randIdx = Math.floor(Math.random() * cards.length);
    let cardIdx = cards[randIdx].split("-");
    let cardVal = cardIdx[0];

    let cardImg = document.createElement("img");
    cardImg.src = ("card-images/" + cards[randIdx] + ".png")
    document.getElementById(cardDispEl).appendChild(cardImg);

    cards.splice(randIdx, 1);
    
    if (cardVal === 'a') {
      return 11;
    } else if (cardVal === 'j' || cardVal === 'k' || cardVal === 'q') {
      return 10;
    } return parseInt(cardVal);
  };

  function hit() {
    playerHand += getCard('playerCards');

    if (playerHand === 21) {
      winMsg('Woohoo! You got blackjack! Player ')
    } else if (playerHand > 21) {
      winMsg('You busted. Dealer ')
    }
  };

  function stay() {
    dealerEl.removeChild(dealerEl.firstElementChild);
    hitBtn.disabled = true;
    dealerHand += getCard('dealerCards');

    if (dealerHand === 21) {
      return winMsg('Dealer got Blackjack. Dealer ');
    } else if (dealerHand >= 17 && dealerHand < 21) {
      compareHand(playerHand, dealerHand)
    } else if (dealerHand < 17) {
      while (dealerHand < 17) {
        dealerHand += getCard('dealerCards');
        compareHand(playerHand, dealerHand);
      }
    }
  };     

  function newGame() {
    let cardImg = document.createElement("img");
    cardImg.src = ("card-images/backCard.png");
    dealerEl.appendChild(cardImg);

    dealerHand = getCard('dealerCards');
    playerHand = getCard('playerCards') + getCard('playerCards');

    ngBtn.style.visibility = 'hidden';
    hitBtn.disabled = false;
    stayBtn.disabled = false;
    
    if (playerHand === 21) {
      winMsg('Woohoo! You got Blackjack! Player ')
    };
  };

  function compareHand(player, dealer) {
    if (dealer > 21) {
      return winMsg("Dealer busts. Player ")
    } else if (dealer > player) {
      return winMsg('Dealer ');
    } else if (player > dealer) {
      return winMsg('Player ');
    }
  };

  function winMsg(winner) {
    stayBtn.disabled = true;
    hitBtn.disabled = true;
    setTimeout(() => {
      document.getElementById('winningMsg').innerText = `${winner} wins!`;
    }, 800);
    //Reloads window after winner announcement is displayed
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  };