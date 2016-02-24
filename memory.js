

var board = document.querySelector(".board");
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];


// function shuffle() {
//     var memory_array= this.length, j, temp;
//     while(--i > 0){
//       j = Math.floor(Math.random() * (i+1));
//       temp = this[j];
//       this[j] = this[i];
//       this[i] = temp;
//     }
//     }
function shuffle() {
    var memory_length = memory_array.length;
    var j;
    var temp;
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
    console.log(this);
    this.classList.toggle("back");
  };

for (var i = 0; i < 16; i++ ){
  var card = document.createElement("div");
  card.innerHTML = (memory_array[i]);
  card.classList.add("card");
  card.classList.add("back");
  card.addEventListener('click',divClick);
  board.appendChild(card);
}
// 1. when one card is flipped, it stays until the other card gets flipped.
// 1.1 you attemp to flip second card. If this card matches with
