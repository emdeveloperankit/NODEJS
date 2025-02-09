const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const timestamp = `${format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")}`;
  const logItem = `${timestamp}\t${uuid()}\t${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventsLog.text"),
      logItem
    );
    console.log("Log item added successfully!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = logEvents;
