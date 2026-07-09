//Hàm cộng thêm số ngày
function addDays(date, days) {
  const clone = new Date(date);
  clone.setDate(clone.getDate() + days);
  return clone;
}

//Hàm kiểm tra cuối tuần
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

//Hàm đếm số ngày đến ngày cuối tuần
function countWeekendsInRange(startDate, endDate) {
  let count = 0;
  let current = new Date(startDate);

  while (current <= endDate) {
    if (isWeekend(current)) {
      count++;
    }
    current = addDays(current, 1);
  }

  return count;
}

const startDate = new Date(2026, 6, 1); // 01/07/2026
const endDate = new Date(2026, 6, 31); // 31/07/2026
if (isWeekend(startDate)) console.log("Ngày đầu là ngày cuối tuần ");
else console.log("Không phải là ngày đầu cuối tuần ");
console.log("Số ngày cuối tuần:", countWeekendsInRange(startDate, endDate));
