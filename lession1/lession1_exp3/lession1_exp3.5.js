//Hàm mô phỏng gọi API
function callApi(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 800) + 300; //delayn từ 300 - 1100ms
    setTimeout(() => {
      //Giả lập thất bại với xác suất = 40%
      if (Math.random() < 0.4) {
        reject(new Error(`Lỗi kết nối với ${url}`));
      } else {
        resolve({
          success: true,
          url: url,
          data: `Dữ liệu từ ${url}`,
        });
      }
    }, delay);
  });
}

//thử lại tổng cộng 4 lần
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i <= retries; i++) {
    try {
      console.log(`\nLần thử ${i + 1}/${retries + 1} - ${url}`);
      const result = await callApi(url);

      console.log(`Thành công sau ${i + 1} lần thử!`);
      return result;
    } catch (error) {
      console.log(`Thất bại lần ${i + 1}: ${error.message}`);

      // Nếu đã thử hết số lần thì throw lỗi
      if (i === retries) {
        console.log(`Đã thử hết ${retries + 1} lần. Không thể kết nối.`);
        throw error;
      }

      // Chờ một chút trước khi retry (backoff đơn giản)
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
}

async function test() {
  try {
    const data = await fetchWithRetry("https://api.example.com/users", 3);
    console.log("Dữ liệu nhận được:  ", data);
  } catch (err) {
    console.error("Lỗi cuối cùng: ", err.message);
  }
}

test();
