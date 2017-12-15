// add(2, 5);
// add(2)(5);

const add = (a, b) => {
  if (b) {
    return a + b;
  }

  const inner = (c) => {
    return a + c;
  };
  return inner;
};

console.log(add(5)(4));
