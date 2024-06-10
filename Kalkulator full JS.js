
    // Fungsi untuk menambahkan angka atau operator ke layar
function appendToResult(value) {
  result += value;
  updateDisplay();
}

// Fungsi untuk menghapus layar
function clearResult() {
  result = '';
  updateDisplay();
}

// Fungsi untuk menghitung hasil
function calculate() {
  try {
    result = eval(result);
  } catch (error) {
    result = 'Error';
  }
  updateDisplay();
}

// Fungsi untuk memperbarui tampilan layar
function updateDisplay() {
  display.textContent = result;
}

// Menginisialisasi variabel dan elemen layar
let result = '';
const display = document.createElement('div');
display.classList.add('calculator-display');
document.body.appendChild(display);

// Membuat tombol-tombol kalkulator
const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];

buttons.forEach(buttonText => {
  const button = document.createElement('button');
  button.textContent = buttonText;

  if (buttonText === 'C') {
    button.addEventListener('click', clearResult);
  } else if (buttonText === '=') {
    button.addEventListener('click', calculate);
  } else {
    button.addEventListener('click', () => appendToResult(buttonText));
  }

  document.body.appendChild(button);
});

// Mengatur gaya CSS untuk tampilan kalkulator
const style = document.createElement('style');
style.textContent = `
  .calculator-display {
    font-size: 24px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }

  button {
    font-size: 18px;
    padding: 10px 20px;
    margin: 5px;
  }
`;
document.head.appendChild(style);