const students = [
  { name: "Anh", score: 8.5, pass: true },
  { name: "Bắc", score: 4.0, pass: false },
  { name: "Chi", score: 9.2, pass: true },
  { name: "Dũng", score: 5.5, pass: true },
  { name: "Nam", score: 3.0, pass: false },
];

const groupedStudents = students.reduce(
  (acc, curr) => {
    const key = curr.pass ? "pass" : "fail";

    // Nếu key này chưa tồn tại trong accumulator, tạo một mảng rỗng cho nó
    if (!acc[key]) {
      acc[key] = [];
    }

    // Đẩy sinh viên hiện tại vào mảng tương ứng
    acc[key].push(curr);

    // Luôn luôn trả về acc cho vòng lặp tiếp theo
    return acc;
  },
  { pass: [], fail: [] },
); // Khởi tạo giá trị ban đầu là object có sẵn 2 mảng rỗng

console.log(groupedStudents);
