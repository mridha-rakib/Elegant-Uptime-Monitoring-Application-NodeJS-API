/*
 * Title: Routes
 * Description: Application Routes
 * Author: Rakib Mahmud Mridha
 * Date: 21/10/23
 *
 */

// internal dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");
const { userHandler } = require("./handlers/routeHandlers/userHandler");
const { tokenHandler } = require("./handlers/routeHandlers/tokenHandler");

const routes = {
  sample: sampleHandler,
  user: userHandler,
  token: tokenHandler,
};

module.exports = routes;
