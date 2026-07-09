function sayHelloLater(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

sayHelloLater(() => {
  console.log("Hello sau 2 giây");
});
