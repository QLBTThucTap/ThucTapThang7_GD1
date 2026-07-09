const students = [
  { name: "Anh", score: 8.5, pass: true },
  { name: "Bắc", score: 4.0, pass: false },
  { name: "Chi", score: 9.2, pass: true },
  { name: "Dũng", score: 5.5, pass: true },
  { name: "Nam", score: 3.0, pass: false },
];

const someStudent = students.every((s) => s.pass === true);
if (someStudent) {
  console.log("Tất cả sinh viên đạt");
} else console.log("Tồn tại sinh viên KHÔNG đạt");
