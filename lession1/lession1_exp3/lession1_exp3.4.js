function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Lã Ngọc Huyền",
      });
    }, 3000);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 101, title: "Bài viết 1", likes: 120 },
        { id: 102, title: "Bài viết 2", likes: 85 },
      ]);
    }, 2000);
  });
}

function fetchComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 201, postId: 101, text: "Hay quá!" },
        { id: 202, postId: 101, text: "Cảm ơn tác giả" },
      ]);
    }, 1000);
  });
}

async function fetchAll() {
  try {
    console.log("Đang tải dữ liệu...");

    //Promise.all([p1,p2,p3]) chờ tất cả các Promise hoàn thành
    //Promise.all chạy song song cả 3 tác vụ
    const [user, posts, comments] = await Promise.all([
      fetchUser(),
      fetchPosts(),
      fetchComments(),
    ]);
    console.log("Tải thành công tất cả dữ liệu: ");
    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (err) {
    console.log("Có lỗi xảy ra!", err);
  }
}

fetchAll();
