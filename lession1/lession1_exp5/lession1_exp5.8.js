function slugify(title) {
  return title
    .trim()
    .toLowerCase()
    .normalize("NFD") // Mẹo thêm: Tách dấu ra khỏi chữ cái tiếng Việt
    .replace(/[\u0300-\u036f]/g, "") // Mẹo thêm: Xóa bỏ các dấu tiếng Việt vừa tách
    .replace(/đ/g, "d") // Mẹo thêm: Chuyển chữ "đ" thành "d"
    .replace(/[^a-z0-9\s]/g, "") // Xóa ký tự đặc biệt (chỉ giữ lại chữ, số và khoảng trắng)
    .replace(/\s+/g, " ")
    .split(" ")
    .join("-");
}

console.log(slugify("Học Lập Trình JavaScript!"));
