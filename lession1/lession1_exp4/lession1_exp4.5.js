const students = [
  { name: "Anh", score: 8.5, pass: true },
  { name: "Bắc", score: 4.0, pass: false },
  { name: "Chi", score: 9.2, pass: true },
  { name: "Dũng", score: 5.5, pass: true },
  { name: "Nam", score: 3.0, pass: false },
];

const someStudent = students.some((s) => s.score < 4);
if (someStudent) {
  console.log("Có sinh viên bị điểm liệt (dưới 4)");
} else console.log("Không có sinh viên nào bị điểm liệt");
