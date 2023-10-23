/*
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user-defined links
 * Author: Rakib Mahmud Mridha
 * Date: 21/10/23
 *
 */
// Dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./lib/data");

// App object - module scaffolding
const app = {};

// temp
data.update(
  "test",
  "newFile4",
  { name: "England", language: "English" },
  (err) => {
    if (!err) {
      console.log("Created successfully!");
    } else {
      console.log(err);
    }
  }
);

// data.read("test", "newFile4", (err, data) => {
//   console.log("Hello");
//   console.log(err, data);
// });

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening to port ${environment.port}`);
  });
};

// Handle Request Response
app.handleReqRes = handleReqRes;

// Start the server
app.createServer();
