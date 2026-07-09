const sum = (...numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum()); // 0 (không truyền tham số)
