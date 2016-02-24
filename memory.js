

var board = document.querySelector(".board");
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];


// function shuffle() {
//     var i = this.length,j,temp;
//     while(--i > 0){
//       j = Math.floor(Math.random() * (i+1));
//       temp = this[j];
//       this[j] = this[i];
//       this[i] = temp;
//     }
//     }


for (var i = 0; i < 16; i++ ){
  var card = document.createElement("div");
  card.innerHTML = (memory_array[i]);
  card.classList.add("card");
  board.appendChild(card);
  card.addEventListener('click',divClick);
  console.log(board);
}
var divClick = function(){
  this.classList.toggle("cardImage");
  console.log("dlji");
};
