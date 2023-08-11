// Two users will be playing this game. whenever the user clicks on anyone of the small pits, The coins inside it will be evenly distributed. 
// The game will be happening in a clockwise manner. If the coin landed on the correspoding player's mancala, he will get one more turn. If the last 
// stone lands on small pit and if it is empty, you can collect the coins of the pit directly opposite to it and add it your mancala. Game ends when either
// one of the side of all dishes become empty.



//declaring a variable to store the user's selected pit coins
var Player1spendings;
var player2Spendings;
var player1freeTurn;
var player2freeTurn;
var player1Mancala = document.getElementsByClassName('mancala1')[0]
var player2Mancala = document.getElementsByClassName('mancala2')[0]
var player1Points = document.getElementById('player1score')
var player2Points =document.getElementById('player2score')
const pits = document.querySelectorAll('.pits')// storing every item with class .pits in a const

document.getElementById('rules').onclick = ()=> {
  window.location = "rules.html"
}
pits.forEach(button =>{
  button.onclick = playersSpendings // Assigning a function to every items in the pits const
} )


var clickcount = 0; // As it is a two player game, odd clicks will be the 
// first player, even for the second player.


function playersSpendings(e){
  
  var i=e.target.getAttribute('id');//stores the id
  var iPlus1 = i
 
  Player1spendings = e.target.textContent // storing the the number of coins to get evenly distributed

  clickcount++


  if (clickcount % 2 != 0){ // player 1 turn

   
      for(let j = 0; j < Player1spendings; j++){
        
        var coins = pits[i].innerHTML
        coins++
        pits[i].innerHTML = coins
        i++
        var k = j;
      freeTurnPlayerOne(iPlus1,k)
       playerOneBonus(i,k) 
      }
      console.log()
    
  
  player1Points.innerHTML = pits[7].innerHTML
  e.target.innerHTML = 0
  console.log(clickcount)
  }
    else{
   
      player2Spendings = e.target.textContent // Player 2 turn
      // console.log(e.target.getAttribute('id'))
      for(let j = 0; j <= player2Spendings; j++){
        var coins = pits[i].innerHTML
        coins++
        pits[i].innerHTML = coins
        i++
        // console.log(i)
        if(i===14){
          i=0;
      }
        if (k+1 == Player1spendings && pits[i-1].innerHTML == 1){ // if the last coin    
          var player2score = parseInt(player2Mancala.textContent)
          if (i === 13){
            var pit13 =parseInt(pits[3].textContent)
            player2score += pit13
            player2Mancala.innerHTML = player2score
            pits[3].innerHTML = 0
          }
        }

       
        if (i === 7){
          continue
        }
      
        
          player2Points.innerHTML = pits[0].innerHTML
          e.target.innerHTML = 0
          console.log(clickcount)
        }
      }
  }


  function freeTurnPlayerOne(iPlus1,k){
    var iPlus1 = parseInt(iPlus1)
    if(iPlus1+k == 7){
      // Player 1 free turn 
      function myFunction() {
       alert('Player1 has got a free turn, his last coin ended up in his mancala');
     }
     setTimeout(myFunction,750)
     clickcount
   }
  }



  function playerOneBonus(i,k){
    if (k+1 == Player1spendings && pits[i-1].innerHTML == 1){ // if the last coin    
      var player1score = parseInt(player2Mancala.textContent)
      if (i === 2){
        var pit13 =parseInt(pits[13].textContent)
        player1score += pit13
        player2Mancala.innerHTML = player1score
        pits[13].innerHTML = 0
      }
      if (i === 3){
        var pit13 =parseInt(pits[12].textContent)
        player1score += pit13
        player2Mancala.innerHTML = player1score
        pits[12].innerHTML = 0
      }

      if (i === 4){
        var pit13 =parseInt(pits[11].textContent)
        player1score += pit13
        player2Mancala.innerHTML = player1score
        pits[11].innerHTML = 0
      }

      if (i === 5){
        var pit13 =parseInt(pits[10].textContent)
        player1score += pit13
        player2Mancala.innerHTML = player1score
        pits[10].innerHTML = 0
      }

      if (i === 6){
        var pit13 =parseInt(pits[9].textContent)
        player1score += pit13
        player2Mancala.innerHTML = player1score
        pits[9].innerHTML = 0
      }

      
      if (i === 7){
        var pit13 =parseInt(pits[8].textContent)
        player1score += pit13
        player2Mancala.innerHTML = player1score
        pits[8].innerHTML = 0
      }      
}
  }

  






      








