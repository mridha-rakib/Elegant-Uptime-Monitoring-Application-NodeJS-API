/*
 * Title: Utilities
 * Description: Important utility functions
 * Author: Rakib Mahmud Mridha
 * Date: 21/10/23
 */

// dependencies

// module scaffolding
const crypto = require("crypto");

const utilities = {};
const environments = require("./environments");

// parse JSON string to Object
utilities.parseJSON = (jsonString) => {
  let output;

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }

  return output;
};

module.exports = utilities;
