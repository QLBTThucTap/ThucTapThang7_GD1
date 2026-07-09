function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formatDay = String(day).padStart(2, "0");
  const formatMonth = String(month).padStart(2, "0");
  return `${formatDay}/${formatMonth}/${year}`;
}

const date1 = new Date(2026, 6, 9);
console.log(formatDate(date1));
// Kết quả: "09/07/2026"
