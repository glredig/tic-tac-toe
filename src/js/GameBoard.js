export default class GameBoard {
  constructor(config) {
    this.game = config.game;
    this.container = config.container;
    this.currentPlayer = config.player;
    this.build();
    this.boardElement.addEventListener('click', config.clickHandler);
  }

  build() {
    this.boardElement = document.createElement('div');
    this.boardElement.className = 'board';
    this.boardElement.classList.add(`player-${this.currentPlayer}`);
    this.container.appendChild(this.boardElement);

    for (let i = 0; i < 9; i++) {
      let square = document.createElement('div');
      square.className = `square square-${i}`;
      square.id = i;
      this.boardElement.appendChild(square);
    }
  }

  updateCurrentPlayer(player) {
    this.boardElement.classList.remove('player-x');
    this.boardElement.classList.remove('player-o');
    this.boardElement.classList.add(`player-${player}`);
  }
}