function simulateKeyPress(key) {
  const iframe = document.getElementById('game-frame');
  if (iframe && iframe.contentWindow) {
    const keyboardEvent = new KeyboardEvent('keydown', { key });
    iframe.contentWindow.dispatchEvent(keyboardEvent);
  }
}

// Attach events to buttons
document.getElementById('leftBtn').addEventListener('touchstart', () => simulateKeyPress('ArrowLeft'));
document.getElementById('rightBtn').addEventListener('touchstart', () => simulateKeyPress('ArrowRight'));