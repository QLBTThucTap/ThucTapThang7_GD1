function addDays(date, days) {
  const clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + days);

  return clone;
}

// Giả sử ngày gốc là ngày 29/08/2005
const originalDate = new Date(2005, 7, 29);

const newDate = addDays(originalDate, 5);

console.log(
  `Ngày gốc: ${originalDate.getDate()}/${originalDate.getMonth() + 1}/${originalDate.getFullYear()}`,
);

console.log(
  `Ngày mới: ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`,
);
