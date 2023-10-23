/*
 * Title: Routes
 * Description: Application Routes
 * Author: Rakib Mahmud Mridha
 * Date: 21/10/23
 *
 */

// internal dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
