function renderStudentCard({ name, score, major }) {
  return `<div>
        <h2>Thông tin sinh viên</h2>
        <p> Họ và tên    ${name}   </p>   
        <p> Điểm         ${score}  </p>  
        <p> Chuyên ngành ${major}  </p>  
    </div>`;
}

const student = {
  name: "Lã Ngọc Huyền",
  score: 8.5,
  major: "IT",
};

console.log(renderStudentCard(student));
