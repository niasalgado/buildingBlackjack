
1. player clicks [NEW GAME] button -- atp no other buttons are displayed
2. [HIT], [STAY] buttons now display
3. Dealer gets their hand (up to 17)
    !!!! ELABORATE OF DEALERHAND LOGIC MORE !!!!
4. Player gets their first card and will click [HIT]
5. After every [HIT] click, player is given a new card and their playerHand is being updated until they click [STAY] OR until their playerHand >= 21 
6. If palyerHand === 21, break and display "Player Wins!"
7. Else If/Once [STAY] is chosen, call the compareHands() function
8. comapreHands() function compares whether dealerHand or playerHand is closer to 21
9. Display "Player/Dealer Wins!" depending on whover is closer to 21
10. Start over with [NEW GAME] button


Game Logic/Pseudocode:
I'll start with showing the player's first two cards, and  showing the dealer's hand, one card facing up, one card facing down.
From there the player will decide whether to [HIT] or [STAY]. Each option will be a button attached to an event listener calling the next function. The [HIT] button will add a card to the player's hand until either the player clicks the [STAY] button or the playerHand >21, to which the game loop will break and a message will display of that "Dealer Wins".
the [STAY] button will invoke the dealerHand function( ), where the second dealer card will flip over and be analyzed. If:
a) the dealerHand >21, "Player WINS"
b) the dealerHand === 21, "Dealer WINS!"
c) dealerHand < 22, && >16 , compare dealerHand to playerHand, and whichever is closest to 21 wins
d)      (part I) dealerHand <17 invoke the dealerHits( ) function, where shuffled cards will be dealt to the dealer.
          (part II) at each cardDealt to the dealer, it will compare whether dealerHand is still <21. If it is greater than 21, break and message out "Player WINS", else if dealerCurrentHand > playerHand && <21, "Dealer Wins!"
Once winner is determined, the [HIT] and [STAY] buttons will disappear, and the [NEW GAME} button will be visible.