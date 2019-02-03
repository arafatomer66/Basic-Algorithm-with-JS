function confirmEnding(string, target) {
    if (string.substr(-target.length) === target) {
      return true;
    } else {
      return false;
    }
  }
  confirmEnding('Bastian', 'n');

  function confirmEnding(string, target) {
    // We return the method with the target as a parameter
    // The result will be a boolean (true/false)
    return string.endsWith(target); // 'Bastian'.endsWith('n')
  }
  confirmEnding('Bastian', 'n');