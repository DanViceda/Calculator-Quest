let outScreen = document.querySelector('.calcTyped');
let operationScreen = document.querySelector('.calcOperation');
mode = 'calc';

function insert(num) {
  if (mode == 'equal') {
    outScreen.textContent = '';
    operationScreen.textContent = '';
    mode = 'calc';
  }
  outScreen.textContent += num;
}

function clearScreen() {
  outScreen.textContent = '';
  operationScreen.textContent = '';
  mode = 'calc';
}

function deleteLastChar() {
  let currentValue = outScreen.textContent;
  if (currentValue.length > 0) {
    outScreen.textContent = currentValue.slice(0, -1);
    if (mode == 'equal') {
      operationScreen.textContent = '';
      mode = 'calc';
    }
  }
}

function calculate() {
  try {
    operationScreen.textContent = outScreen.textContent;
    let result = eval(outScreen.textContent);

    if (isNaN(result) || !isFinite(result)) {
      outScreen.textContent = 'Error';
    } else {
      outScreen.textContent = result;
    }

    mode = 'calc';
  } catch (err) {
    outScreen.textContent = 'Error';
    mode = 'equal';
  }
}

function toggleDarkMode() {
  const body = document.body;
  const container = document.querySelector('.container');
  const calcScreen = document.querySelector('.calcScreen');
  const buttons = document.querySelectorAll('.button');

  if (body.classList.contains('darkMode')) {
    body.classList.remove('darkMode');
    container.classList.remove('darkMode');
    calcScreen.classList.remove('darkMode');
    buttons.forEach(button => button.classList.remove('darkMode'));
  } else {
    body.classList.add('darkMode');
    container.classList.add('darkMode');
    calcScreen.classList.add('darkMode');
    buttons.forEach(button => button.classList.add('darkMode'));
  }
}

window.addEventListener('load', () => {
  const modeToggle = document.getElementById('modeToggle');
  modeToggle.checked = localStorage.getItem('darkMode') === 'true';
  toggleDarkMode();
});

document.getElementById('modeToggle').addEventListener('change', (event) => {
  localStorage.setItem('darkMode', event.target.checked);
});
