function operate(operator, x, y) {
  x = parseFloat(x);
  y = parseFloat(y);
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    default:
      return y;
  }
}

let result = 0;
let operator_buffer = 0;
let display = 0;
let chosen_operator = "+";

function concat(button) {
  let value_str = button.value;
  let output = document.querySelector('.output');
  switch (value_str) {
    case 'clear':
      result = 0;
      operator_buffer = 0;
      display = 0;
      output.innerHTML = display;
      break;

    case '+':
      console.log(chosen_operator);
      display = operate(chosen_operator, operator_buffer, display);
      operator_buffer = display;
      chosen_operator = '+';
      display = 0;
      output.innerHTML = operator_buffer;
      break;


    case '-':
      if (operator_buffer != 0) {
        display = operate(chosen_operator, operator_buffer, display);
      }
      operator_buffer = display;
      chosen_operator = '-';
      display = 0;
      output.innerHTML = operator_buffer;
      break;


    case '*':
      if (operator_buffer == 0) {
        display = operate('*', 1, display);
      } else {
        display = operate(chosen_operator, operator_buffer, display);
      }
      operator_buffer = display;
      chosen_operator = '*';
      display = 0;
      output.innerHTML = operator_buffer;
      break;


    case '/':
      if (operator_buffer == 0) {
        display = operate('/', display, 1);
      } else {
        display = operate(chosen_operator, display, operator_buffer);
      }
      operator_buffer = display;
      chosen_operator = '/';
      display = 0;
      output.innerHTML = operator_buffer;
      break;

    case '=':
      display = operate(chosen_operator, operator_buffer, display);
      output.innerHTML = display.toString();
      break;

    case 'delete':
      if (display.toString().length == 1) {
        display = 0
        output.innerHTML = display;
        break;
      }
      display = display.toString().slice(0, -1);
      output.innerHTML = display;
      break;

    default:
      if (display == 0) {
        display = value_str;
        result = value_str;
        output.innerHTML = display;
        break;
      }
      if (operator_buffer != 0) {
        output.innerHTML = operator_buffer;
      }
      result += value_str;
      display += value_str;
      output.innerHTML = display;
      break;
  }

  // if (button.value == "clear") {
  //   result = "";
  //   output.innerHTML = "0";
  //   return
  // }
}

