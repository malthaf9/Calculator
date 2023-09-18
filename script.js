let string = "";
let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.number');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = eval(string);
        inputField.value = string;
      } catch (error) {
        inputField.value = 'Error';
        string = ""; 
      }
    } else if (e.target.innerHTML === 'C') {
      string = "";
      inputField.value = '';
    } else {
      string = string + e.target.innerHTML;
      inputField.value = string;
    }
  });
});