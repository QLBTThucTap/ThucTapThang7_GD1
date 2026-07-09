function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "User " + id });
      } else {
        reject("Id không hợp lệ");
      }
    }, 1000);
  });
}

// Async/await
async function getUserAsync(id) {
  try {
    const user = await getUserPromise(id);
    console.log("In thành công: ", user);
    return user;
  } catch (error) {
    console.log("Lỗi id không hợp lệ!");
  }
}

// // Ví dụ 1: Thành công
// getUserAsync(10);

// // Ví dụ 2: Thất bại
// getUserAsync(-5);

async function main() {
  await getUserPromise(4);
  await getUserAsync(0);
  console.log("Hoàn thành tất cả!");
}
