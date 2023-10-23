/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Rakib Mahmud Mridha
 * Date: 21/10/23
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested URL was not found!",
  });
};

module.exports = handler;
