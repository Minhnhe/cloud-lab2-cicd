const fs = require("fs");

if (!fs.existsSync("index.html")) {
    console.error("index.html khong ton tai");
    process.exit(1);
}

console.log("Test passed: index.html ton tai");