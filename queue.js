const Queue = require("./src/lib/queue");
const sendEmailJob = require("./src/jobs/emailJob");

Queue.process(sendEmailJob.handle);