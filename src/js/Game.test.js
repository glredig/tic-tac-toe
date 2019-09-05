import Game from './Game';
import GameBoard from './GameBoard';
import FlashMessage from './FlashMessage';
import { WINNERS } from './constants';
import { toContainHTML, toHaveClass } from '@testing-library/jest-dom';

jest.mock('./GameBoard');
jest.mock('./FlashMessage');

expect.extend({ toContainHTML, toHaveClass })

describe('GameBoard', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe('initialization', () => {
    it('sets up the GameBoard and FlashMessage', () => {
      expect(GameBoard).toHaveBeenCalledTimes(1);
      expect(FlashMessage).toHaveBeenCalledTimes(1);
    });

    it('creates a container div', () => {
      expect(document.body).toContainHTML('<div class="container">');
    });

    it('creates a restart button', () => {
      expect(document.body).toContainHTML('<button class="button-restart">');
    });

    it('initializes variables', () => {
      expect(game.playerXSelections.length).toBe(0);
      expect(game.playerOSelections.length).toBe(0);
      expect(game.active).toBe(true);
      expect(game.currentPlayer).toBe('x');
    });
  });

  describe('isWinner', () => {
    it('returns false if not a winner', () => {
      expect(game.isWinner([0, 3, 4])).toBe(false);
    });

    it('returns the winning array if a winner', () => {
      expect(game.isWinner([0, 3, 4, 6])).toMatchObject([0, 3, 6]);
    });
  });

  describe('arrayContains', () => {
    it('returns false if array is empty', () => {
      expect(game.arrayContains([], [1, 2, 3])).toBe(false);
    });

    it('returns false if array does not contain array', () => {
      expect(game.arrayContains([1, 2, 4, 5], [1, 5, 7])).toBe(false);
    });

    it('returns true if array does contain array', () => {
      expect(game.arrayContains([1, 2, 5, 6, 8], [1, 5, 8])).toBe(true);
    });
  });
})