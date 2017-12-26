function countItems(arr, item) {
  if (arr.length === 0) {
    return 0;
  }

  if (arr[0] instanceof Array) {
    for (var i = 0; i < arr[0].length; i++) {
      if (arr[0][i] === item) {
        return 1 + countItems(arr.slice(1), item);
      }
    }
  }

  return (arr[0] === item) + countItems(arr.slice(1), item);
}

var arr = ['apple', ['banana', 'strawberry', 'apple']];
console.log(countItems(arr, 'apple'));
