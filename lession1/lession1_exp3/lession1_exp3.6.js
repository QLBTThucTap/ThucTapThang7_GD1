const delay = Math.floor(Math.random() * 2000) + 1000;

function getProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: `Sản phẩm ${id}`,
        price: 100000 + id * 50000,
        inStock: id % 2 === 0,
      });
    }, delay);
  });
}

//Lấy dữ liệu tuần tự
async function fetchSequential(ids) {
  console.log("Bắt đầu lấy dữ liệu TUẦN TỰ...");

  const start = Date.now();
  const result = [];

  for (const id of ids) {
    const p = await getProductById(id);
    result.push(p);
    console.log(`Đã lấy sản phẩm ${id}`);
  }
  console.log("Danh sách sản phẩm ", result);

  const end = Date.now();
  console.log(`Hoàn thành TUẦN TỰ trong: ${(end - start) / 1000} giây`);
  return result;
}

//Lấy dữ liệu song song
async function fetchParallel(ids) {
  console.log("\nBắt đầu lấy dữ liệu SONG SONG...");
  const start = Date.now();

  //tạo mảng mới
  const promise = ids.map((id) => getProductById(id));
  const result = await Promise.all(promise); //chạy song song tất cả promise
  console.log("Danh sách sản phẩm ", result);

  const end = Date.now();
  console.log(`Hoàn thành SONG SONG trong: ${(end - start) / 1000} giây`);
  return result;
}

async function main() {
  const ids = [1, 2, 3, 4, 5];

  // Tuần tự
  const seqResults = await fetchSequential(ids);
  console.log("Kết quả tuần tự:", seqResults.length, "sản phẩm\n");


  // Song song
  const parResults = await fetchParallel(ids);
  console.log("Kết quả song song:", parResults.length, "sản phẩm\n");
}

main();
