const request = require("request");
const fs = require("fs");

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(`error: ${error}`);
  }
  if (response) {
    console.log(`setupcode: ${response}`);
  }
  if (body) {
    const data = fs.writeFile(process.argv[3], body, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
