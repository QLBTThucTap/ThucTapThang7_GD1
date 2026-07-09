class Timer {
  constructor() {
    this.seconds = 0;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.seconds++;
      console.log(`Đã đếm ${this.seconds} giây`);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    console.log(`Time dừng lại ở ${this.seconds} giây`);
  }
}

timer = new Timer();
timer.start();

setTimeout(() => {
  timer.stop();
}, 1000);
