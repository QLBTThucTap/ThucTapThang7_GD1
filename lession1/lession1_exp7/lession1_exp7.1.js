const orders = [
  {
    id: 1,
    customer: "An",
    total: 250000,
    date: "2026-06-01",
    status: "completed",
  },
  {
    id: 2,
    customer: "Bình",
    total: 120000,
    date: "2026-06-15",
    status: "cancelled",
  },
  {
    id: 3,
    customer: "Chi",
    total: 500000,
    date: "2026-07-02",
    status: "completed",
  },
  {
    id: 4,
    customer: "An",
    total: 75000,
    date: "2026-07-05",
    status: "completed",
  },
];

//1. tính tổng doanh thu
const sum = orders
  .filter((o) => o.status === "completed")
  .reduce((acc, cur) => acc + cur.total, 0);
console.log("\n1.Tính tổng doanh thu:");
console.log(`Tổng doanh thu các đơn hàng 'completed' là: ${sum}`);

//2.Hiển thị danh sách chuỗi

//hàm bổ trợ định dạng ngày dd/mm/yyyy
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

//hàm bổ trợ định dạng tiền tệ
const formatCurrency = (amount) => {
  return amount.toLocaleString("vi-VN") + "đ";
};

const ds = orders.map((order) => {
  return `\nĐơn #${order.id} - ${order.customer} - ${formatCurrency(order.total)} - ${formatDate(order.date)}`;
});
console.log("\n2.Hiển thị danh sách:");
console.log(`Danh sách: ${ds}`);

//3.Nhóm theo tên
const group = orders.reduce((acc, cur) => {
  const key = cur.customer;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(cur);
  return acc;
}, {});
console.log("\n3.Nhóm đơn hàng theo tên khách hàng:");
console.log(group);

//4. Hàm xử lý bất đồng bộ
const process = (order) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        `Xử lý thành công đơn hàng #${order.id} của khách hàng ${order.customer}`,
      );
    }, 1000);
  });
};

const processAll = async (orderList) => {
  console.log("\n4. Bắt đầu xử lý tuần tự các đơn hàng 'completed'...");
  const completed = orderList.filter((order) => order.status === "completed");
  for (const order of completed) {
    console.log(`[Đang xử lý] Đơn hàng #${order.id}...`);
    const result = await process(order);
    console.log(`[Hoàn thành] ${result}`);
  }
  console.log("Tất cả đơn hàng 'completed' đã được xử lý xong!");
};

processAll(orders);
