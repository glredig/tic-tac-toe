export default class FlashMessage {
  constructor() {
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

  hide() {
    this.container.style.display = 'none';
  }
}