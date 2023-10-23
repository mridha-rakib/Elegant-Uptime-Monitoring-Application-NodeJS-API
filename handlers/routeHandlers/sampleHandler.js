/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Rakib Mahmud Mridha
 * Date: 21/10/23
 *
 */
// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(500, {
    message: "This is a sample url",
  });
};

module.exports = handler;
