const enrollDate = new Date(2024, 8, 5); // Ngày nhập học

//Hàm cộng thêm năm
function addYears(date, years) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

//Ngày tốt nghiệp
const graduation = addYears(enrollDate, 4);

//Ngày hiện tại
const today = new Date();

//Tính số ngày còn lại
const diffTime = graduation - today;
const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log("Ngày nhập học:", enrollDate.toLocaleDateString("vi-VN"));
console.log("Ngày tốt nghiệp dự kiến:", graduation.toLocaleDateString("vi-VN"));
console.log("Số ngày còn lại:", daysLeft);
