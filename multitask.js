const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

function request() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("Req:", Date.now() - start);
      });
    })
    .end();
}

function hash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });
}

request();

fs.readFile("multitask.js", "utf8", () => {
  console.log("FS:", Date.now() - start);
});

hash();
hash();
hash();
hash();
