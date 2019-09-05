import GameBoard from './GameBoard';
import Game from './Game';
import { toContainHTML, toHaveClass } from '@testing-library/jest-dom';

expect.extend({ toContainHTML, toHaveClass })

describe('GameBoard', () => {
  let gb;
  let game;

  beforeEach(() => {
    game = new Game();
    gb = new GameBoard({
      game: game,
      currentPlayer: 'x',
      container: game.container
    });
  });

  describe('build', () => {
    it('creates the board element', () => {
      expect(document.body).toContainHTML('<div class="board');
    });

    it('creates 9 squares', () => {
      expect(document.body).toContainHTML('<div class="square square-0"');
      expect(document.body).toContainHTML('<div class="square square-1"');
      expect(document.body).toContainHTML('<div class="square square-2"');
      expect(document.body).toContainHTML('<div class="square square-3"');
      expect(document.body).toContainHTML('<div class="square square-4"');
      expect(document.body).toContainHTML('<div class="square square-5"');
      expect(document.body).toContainHTML('<div class="square square-6"');
      expect(document.body).toContainHTML('<div class="square square-7"');
      expect(document.body).toContainHTML('<div class="square square-8"');
    });
  });
  
  describe('updateCurrentPlayer', () => {
    it('updates the current player class', () => {
      gb.updateCurrentPlayer('o');
      expect(gb.boardElement).toHaveClass('player-o');
      expect(gb.boardElement).not.toHaveClass('player-x');
    });
  })
})