const students = [
  { name: "Anh", score: 8.5, pass: true },
  { name: "Bắc", score: 4.0, pass: false },
  { name: "Chi", score: 9.2, pass: true },
  { name: "Dũng", score: 5.5, pass: true },
  { name: "Nam", score: 3.0, pass: false },
];

const filterStudent = students.filter((s) => s.pass === true);
const mapStudent = filterStudent.map((f) => f.score);
const total = mapStudent.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("Danh sách sinh viên đạt: ", filterStudent);
console.log("Danh sách điểm SV: ", mapStudent);
console.log("Tổng điểm của SV đậu: ", total);
