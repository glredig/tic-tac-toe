import FlashMessage from './FlashMessage';
import GameBoard from './GameBoard';
import WINNERS from './constants';

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

    let selection = this.currentPlayer === 'x' ? this.playerXSelections : this.playerOSelections;
    e.target.classList.add(`selected-${this.currentPlayer}`);

    selection.push(number);
    if (this.isWinner(selection)) {
      console.log('Winner is: ', this.currentPlayer, selection);
    }
    
    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
    this.board.updateCurrentPlayer(this.currentPlayer);
  }

  isWinner(selectionArray) {
    return false;
    // WINNERS.forEach((winner) => {
    //   winner.forEach
    // })
  }
}
