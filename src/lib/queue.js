const Queue = require("bull");
const config = require("../config/bull");
const data = require("../jobs/emailJob");

const queue = new Queue(data.key, config);

module.exports = queue;