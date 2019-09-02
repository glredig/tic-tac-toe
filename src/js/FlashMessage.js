export default class FlashMessage {
  constructor() {
    console.log('loading flash message...')
    this.build();
  }

  build() {
    this.container = document.createElement('div');
    this.container.className = 'flash-message';
    document.body.appendChild(this.container);
  }

  alertMessage(message) {
    this.container.innerText = message;
    this.container.style.display = 'block';
  }
}