import FlashMessage from './FlashMessage';
import GameBoard from './GameBoard';
import { WINNERS } from './constants';

export default class Game {
  constructor() {
    console.log('Loading game...');
    this.flashMessage = new FlashMessage();
    this.buildContainer();
    this.board = new GameBoard({
      container: this.container,
      clickHandler: this.handleSquareClick.bind(this),
      player: 'x',
      game: this
    });
    this.buildRestartButton();
    this.currentPlayer = 'x';
    this.playerXSelections = [];
    this.playerOSelections = [];
    this.active = true;
    this.flashMessage.alertMessage(`Player x's turn...`);
  }

  buildContainer() {
    this.container = document.createElement('div');
    this.container.className = 'container';
    document.body.appendChild(this.container);
  }

  buildRestartButton() {
    this.restartButton = document.createElement('button');
    this.restartButton.innerText = 'Restart Game';
    this.restartButton.className = 'button-restart';
    this.container.appendChild(this.restartButton);
    this.restartButton.addEventListener('click', this.reset.bind(this));
  }

  handleSquareClick(e) {
    let number = parseInt(e.target.id, 10);

    if (!this.active || this.playerXSelections.indexOf(number) > -1 || this.playerOSelections.indexOf(number) > -1) {
      return false;
    }

    let selectionSet = this.currentPlayer === 'x' ? this.playerXSelections : this.playerOSelections;
    e.target.classList.add(`selected-${this.currentPlayer}`);

    selectionSet.push(number);

    let isWinner = this.isWinner(selectionSet);
    if (isWinner) {
      isWinner.forEach((id) => {
        document.getElementById(id).classList.add('winner');
      });
      this.active = false;
      this.flashMessage.alertMessage(`Player ${this.currentPlayer} is the winner!`);
    }
    else if (this.playerXSelections.length + this.playerOSelections.length >= 9) {
      this.flashMessage.alertMessage(`Cat's game. No winner this time. :-(`);
    }
    else {
      this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
      this.board.updateCurrentPlayer(this.currentPlayer);
      this.flashMessage.alertMessage(`Player ${this.currentPlayer}'s turn...`);
    }
  }

  isWinner(selectionArray) {
    let matchWinner = false;
    WINNERS.forEach((winner) => {
      if (this.arrayContains(selectionArray, winner)) {
        matchWinner = winner;
      }
    })

    return matchWinner;
  }

  reset() {
    this.active = true;
    this.playerXSelections = [];
    this.playerOSelections = [];
    this.currentPlayer = 'x';
    this.flashMessage.alertMessage(`Player ${this.currentPlayer}'s turn...`);
    document.querySelectorAll('.square').forEach((el) => {
      el.classList.remove('selected-x', 'selected-o', 'winner');
    });
  }

  arrayContains(selected, winner) {
    if (selected.length === 0 || winner === 0) {
      return false;
    }

    return winner.every((el) => {
      return selected.indexOf(el) > -1;
    });
  }
}
