function wrap(execute) {
  try {
    execute();
    return function() {
      return execute();
    }
  } catch (e) {
    return function() {
      return null;
    }
  }
}

var errorExec = wrap(function() {
  throw new Error('Error');
});
var resultExec = wrap(function() {
  return 'Result';
});

console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"
