/*
 * Title: Handle Request Response
 * Description: Handle Resquest and response
 * Author: Rakib Mahmud Mridha
 * Date: 21/10/23
 *
 */

// dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");
const { type } = require("os");

// modue scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};
    const payloadString = JSON.stringify(payload);
    res.writeHead(statusCode).end(payloadString);
  });

  req
    .on("data", (buffer) => {
      realData += decoder.write(buffer);
    })
    .on("end", () => {
      realData += decoder.end();
      console.log(realData);
      res.end("hello world");
    });
};

// return;
module.exports = handler;