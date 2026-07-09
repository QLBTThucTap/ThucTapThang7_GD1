function diffInDays(date1, date2) {
  //tính khoảng chênh lệch mili giây
  const diffInMs = Math.abs(date2 - date1);

  const msInDay = 24 * 60 * 60 * 1000;
  const diffDays = diffInMs / msInDay;

  return Math.round(diffDays);
}

const d1 = new Date(2026, 11, 25); // Tháng 12
const d2 = new Date(2026, 11, 31);
console.log(`Chênh lệch: ${diffInDays(d1, d2)} ngày`);
