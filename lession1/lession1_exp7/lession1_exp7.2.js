function searchProduct(products, keyword) {
  const lowerKeyword = keyword.toLowerCase(); //chuẩn hóa về chữ thường
  const filter = products.filter((p) =>
    p.name.toLowerCase().includes(lowerKeyword),
  );
  return [...filter].sort((a, b) => a.price - b.price);
}

const originalProducts = [
  { name: "Điện thoại iPhone 15", price: 22000000, category: "Electronics" },
  { name: "Laptop ASUS ROG", price: 35000000, category: "Electronics" },
  { name: "Chuột máy tính không dây", price: 500000, category: "Accessories" },
  { name: "Bàn phím cơ ASUS", price: 1800000, category: "Accessories" },
  { name: "Tai nghe Sony", price: 4200000, category: "Electronics" },
];

const result = searchProduct(originalProducts, "asus");
console.log("--- KẾT QUẢ TÌM KIẾM (Sắp xếp giá tăng dần) ---");
console.log(result);

console.log("\n--- KIỂM TRA MẢNG GỐC (Không bị thay đổi) ---");
console.log(originalProducts[3]);
