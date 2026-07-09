const obj = {
  value: 42,
  normalFn: function () {
    //this được xác định tại thời điểm gọi hàm tức value = 42
    console.log("Normal Function: ", this.value);
  },
  arrowFn: () => {
    //this được xác định tại thời điểm khai báo

    //trong trường hợp này trong arrowFn khai báo ở ngoài cùng (Global)
    // nên giá trị value nên trả về giá trị undefined
    console.log("Arrow Function: ", this.value);
  },
};

obj.normalFn();
obj.arrowFn();
