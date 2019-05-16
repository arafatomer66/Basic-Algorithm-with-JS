// if input is 'string', 72, or 'hello', call doSomething function
if (input === 'string' || input === 72 || input === 'hello') {
    doSomething()
  }
  // Shorthand
  if (['string', 72, 'hello'].indexOf(input) !== -1) {
    doSomething()
  }