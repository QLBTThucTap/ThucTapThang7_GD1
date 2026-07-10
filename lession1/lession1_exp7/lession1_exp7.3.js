const delay = Math.floor(Math.random() * 2000) + 1000;

function fetchweather(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(`Không thể lấy dữ liệu của ${city}`);
      } else {
        const temperature = Math.floor(Math.random() * 15) + 20; // 20 - 34°C
        resolve({
          city,
          temperature,
          delay,
        });
      }
    }, delay);
  });
}

async function getWeather() {
  const cities = ["Hà Nội", "Đà Nẵng", "TP.HCM", "Huế", "Cần Thơ"];
  const start = Date.now();

  try {
    const result = await Promise.allSettled(
      cities.map((city) => fetchweather(city)),
    );
    const end = Date.now();

    console.log("===== KẾT QUẢ =====");
    result.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(
          `${cities[index]}: ${result.value.temperature} độ (Delay: ${result.value.delay} ms)`,
        );
      } else {
        console.log(`${cities[index]}: ${result.reason}`);
      }
    });

    console.log(`\nTổng thời gian thực thi: ${end - start} ms `);
  } catch (error) {
    console.log("Lỗi:", error);
  }
}

getWeather();
