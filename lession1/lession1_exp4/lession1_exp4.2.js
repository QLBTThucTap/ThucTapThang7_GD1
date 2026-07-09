const students = [
  { name: "Anh", score: 8.5, pass: true },
  { name: "Bắc", score: 4.0, pass: false },
  { name: "Chi", score: 9.2, pass: true },
  { name: "Dũng", score: 5.5, pass: true },
  { name: "Nam", score: 3.0, pass: false },
];

const filterStudent = students.filter((s) => s.pass === true);
console.log(filterStudent); // trả về 1 danh sách
