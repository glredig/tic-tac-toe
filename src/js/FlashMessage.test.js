import FlashMessage from './FlashMessage';
import { toContainHTML } from '@testing-library/jest-dom';

expect.extend({ toContainHTML })

describe('FlashMessage', () => {
  let fm;

  beforeEach(() => {
    fm = new FlashMessage();
  });
  
  it('builds a flash message div', () => {
    expect(fm.container).toBeTruthy();
    expect(document.body).toContainHTML('<div class="flash-message">');
  });

  describe('alertMessage', () => {
    it('updates the current message', () => {
      fm.alertMessage('my test');
      expect(fm.container.innerText).toBe('my test');
      expect(fm.container.style.display).toBe('block');
    });
  })
})