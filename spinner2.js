let delay = 0;
let getSpinnerChar = (current) => {
  switch (current) {
    case '|':
      return '/';
    case '/':
      return '-';
    case '-':
      return '\\';
    case '\\':
      return '|';
  }
}
let currentChar = '|'
for (let i = 0; i < 9; i++) {
  if (i === 8) {
    setTimeout(() => {
      process.stdout.write(`\n`);
      currentChar = getSpinnerChar(currentChar);
    }, delay);
  } else {
    setTimeout(() => {
      process.stdout.write(`\r${getSpinnerChar(currentChar)}   `);
      currentChar = getSpinnerChar(currentChar);
    }, delay);
  }
  delay += 200;
}

