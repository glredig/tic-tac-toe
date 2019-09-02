import FlashMessage from './FlashMessage';
import GameBoard from './GameBoard';
import { WINNERS } from './constants';

export default class Game {
  constructor() {
    console.log('loading game...');
    this.flashMessage = new FlashMessage();
    this.build();
    this.board = new GameBoard({
      container: this.container,
      clickHandler: this.handleSquareClick.bind(this),
      player: 'x',
      game: this
    });
    this.currentPlayer = 'x';
    this.playerXSelections = [];
    this.playerOSelections = [];
  }

  build() {
    this.container = document.createElement('div');
    this.container.className = 'container';
    document.body.appendChild(this.container);
  }

  handleSquareClick(e) {
    let number = parseInt(e.target.id, 10);

    if (this.playerXSelections.indexOf(number) > -1 || this.playerOSelections.indexOf(number) > -1) {
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
      this.flashMessage.alertMessage(`Player ${this.currentPlayer} is the winner!`);
    }
    else if (this.playerXSelections.length + this.playerOSelections.length >= 9) {
      this.flashMessage.alertMessage(`Cat's game. No winner this time. :-(`);
    }
    else {
      this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
      this.board.updateCurrentPlayer(this.currentPlayer);
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

  arrayContains(selected, winner) {
    if (selected.length === 0 || winner === 0) {
      return false;
    }

    return winner.every((el) => {
      return selected.indexOf(el) > -1;
    });
  }
}
