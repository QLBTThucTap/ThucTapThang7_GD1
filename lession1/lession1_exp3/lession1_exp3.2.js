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

//.then() dùng để hứng kết quả khi Promise thành công
//.catch() dùng để xử lý nếu Promise thất bại.

// Ví dụ 1: Thành công
getUserPromise(5)
  .then((user) => {
    console.log("In thành công: ", user);
  })
  .catch((err) => {
    (console.log("Lỗi không chạy được "), err);
  });

// Ví dụ 2: Thất bại
getUserPromise(0)
  .then((user) => {
    console.log("In thành công: ", user);
  })
  .catch((err) => {
    (console.log("Lỗi không chạy được "), err);
  });
