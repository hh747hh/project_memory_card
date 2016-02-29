

var board = document.querySelector(".board");
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];



function shuffle() {
  var memory_length = memory_array.length;
  var j;
  var temp;
  // I strongly recommend while(){ instead of the { on the next line
  // Also, convention would be while(memory_length !== 0)
  // instead of the other way around
  while(0 !== memory_length)
  {j = Math.floor(Math.random() * (memory_length));
    memory_length= memory_length - 1;
    temp = memory_array[memory_length];
    memory_array[memory_length] = memory_array[j];
    memory_array[j] = temp;
  }
}

shuffle();

var divClick = function(){
  //console.log(this);
  console.log(this.textContent);

  var letter = this.textContent;

  if(clicks.length <2){
    clicks.push(letter);
    this.classList.remove("back");
  }
  if(clicks.length === 2) {
    if(clicks[0] === clicks[1]){
      //alert("GOOD JOB!")
      console.log(clicks);
      clicks = [];
      // var storeClicks = [];
      // storeClicks.push(clicks);
      // console.log(storeClicks);

    } else {
      clicks = [];
      var allCard = document.querySelectorAll(".card");
      for (var i = 0; i < allCard.length; i++ ){
        allCard[i].classList.add("back");

      }
    }
  }
  console.log(clicks);

  var allBack = document.querySelectorAll(".back");
  if(allBack.length === 0){
    alert('WOW!! YOU HAVE A SUPER MEMORY!!!');
  }

};


for (var i = 0; i < 16; i++ ){
  var card = document.createElement("div");
  card.innerHTML = (memory_array[i]);
  card.classList.add("card");
  card.addEventListener('click',divClick);
  //card.classList.add("back");
  board.appendChild(card);
}

setTimeout(function(){
  var cards = document.querySelectorAll('.card');
  for(var i = 0; i < 16; i++){
    cards[i].classList.add("back");
  }
}, 3000);


function getLetter(a,b){
  // Doesn't look like you use this function anywhere
  var allCard = document.querySelectorAll(".card");//creates array of the card
  var oneCard = allCard[a];//gets one card from array
  var cardText = oneCard.textContent;//gets the text from the card
  var twoCard = allCard[b];
  var cardText2 = twoCard.textContent;

  console.log(cardText);
  console.log(cardText2);
}
//getLetter(2,3);

var clicks = [];
// Usually you want all your `var` at the top of the script

// 1. when one card is flipped, it stays until the other card gets flipped.
// 1.1 you attemp to flip second card. If this card matches withthe firt one, it stays flipped.
// 1.2 if this card doesn't match with the first one, both back to black.
