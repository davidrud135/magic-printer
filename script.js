window.onload = (ev) => {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  const body = document.getElementsByTagName('body')[0];
  const header = document.getElementsByTagName('h1')[0];
  const headerHeight = 35;

  setTimeout(() => {
    setInterval(animateHeaderTitle, 750);
  }, 500);

  header.style.height = `${headerHeight}px`;
  document.onkeyup = (ev) => appendLetterToBody(ev);

  function appendLetterToBody(ev) {
    const { key, keyCode } = ev;
    const isLetter = keyCode >= 65 && keyCode <= 90;
    if (!isLetter) return;
    const randLetterSize = getRandomIntInclusive(10, 30);
    const randLetterXPosition = getRandomIntInclusive(
      randLetterSize + headerHeight,
      windowWidth - randLetterSize
    );
    const randLetterYPosition = getRandomIntInclusive(
      randLetterSize + headerHeight,
      windowHeight - randLetterSize
    );
    const letterBlock = document.createElement('div');

    letterBlock.innerText = key;
    letterBlock.style.color = getRandomHEXColor();
    letterBlock.style.top = `${randLetterYPosition}px`;
    letterBlock.style.left = `${randLetterXPosition}px`;
    letterBlock.style.fontSize = `${randLetterSize}px`;
    body.appendChild(letterBlock);
  }

  function animateHeaderTitle() {
    const headerTextArr = header.innerText.split('');
    const lastLetter = headerTextArr.pop();
    headerTextArr.unshift(lastLetter);
    header.innerText = headerTextArr.join(' ');
  }
};

function getRandomHEXColor() {
  return `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
