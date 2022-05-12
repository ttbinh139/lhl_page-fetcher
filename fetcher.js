const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

const request = require('request');
const fs = require('fs');

if(url && path) {
  const conn = request(url, function(error, response, body) {
    if(error) {
      throw "Something wrong";
    }
    if(response && response.statusCode === 200) {
      // Write body to file
      try {
        fs.writeFileSync(path, body);
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
      } catch (error) {
        console.log(error);
      }
    }
  });
} else {
  console.log("Missing parameters");
}
