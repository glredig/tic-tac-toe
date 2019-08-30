export default class GameBoard {
  constructor(config) {
    this.game = config.game;
    this.container = config.container;
    this.build();
  }

  build() {
    this.boardElement = document.createElement('div');
    this.boardElement.className = 'board';
    this.container.appendChild(this.boardElement);

    for (let i = 0; i < 9; i++) {
      let square = document.createElement('div');
      square.className = `square square-${i}`;
      this.boardElement.appendChild(square);
    }
  }
}