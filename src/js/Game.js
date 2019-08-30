import FlashMessage from './FlashMessage';
import GameBoard from './GameBoard';

export default class Game {
  constructor() {
    console.log('loading game...');
    this.flashMessage = new FlashMessage();
    this.build();
    this.board = new GameBoard({
      container: this.container,
      game: this
    });
    this.currentPlayer = 'x';
  }

  build() {
    this.container = document.createElement('div');
    this.container.className = 'container';
    document.body.appendChild(this.container);
  }
}
