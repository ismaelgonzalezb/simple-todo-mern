if (process.env["NODE_ENV"] != "production") {
  require("dotenv").config();
}

class Configuration {
  static get(key) {
    if (!key) {
      console.log(`Missing ${key}`);
    }
    return process.env[key];
  }
}

module.exports = {
  Configuration,
};
