
var scores, roundScore, activePlayer;

intial();

document.querySelector('.btn-roll').addEventListener('click', function() {
  var dice = Math.floor(Math.random() * 6) + 1;

  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  if (dice !== 1){
    roundScore += dice;
    document.querySelector('#current'+ activePlayer).textContent = roundScore;
    //document.querySelector('#score'+ activePlayer).textContent = dice;
  }else{
    nextPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += roundScore;
  document.querySelector('#score'+ activePlayer).textContent = scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document.querySelector('#name' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';

  }else{
  nextPlayer();
}
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current0').textContent = roundScore;
  document.getElementById('current1').textContent = roundScore;
  document.querySelector('.player0').classList.toggle('active');
  document.querySelector('.player1').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';

}
document.querySelector('.btn-new').addEventListener('click', intial);

function intial(){

  scores = [0,0]
  roundScore= 0;
  activePlayer = 0;
  dice = Math.floor(Math.random() * 6) + 1;

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.final-score').style.display = 'none';
  document.getElementById('score0').textContent = '0';
  document.getElementById('score1').textContent = '0';
  document.getElementById('current0').textContent = '0';
  document.getElementById('current1').textContent = '0';
  document.querySelector('#name1').textContent = 'Player 2';
  document.querySelector('#name0').textContent = 'Player 1';
  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';


}
