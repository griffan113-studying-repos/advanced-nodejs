const https = require("https");

const start = Date.now();

function request() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

for (let _ in Array(7).fill()) {
  request();
}
