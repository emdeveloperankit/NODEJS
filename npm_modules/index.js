// console.log("This is  just an testing!");

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
// console.log("hello");

console.log(uuid()); // Output: a81d99b1-440f-43b7-8b44-a8433e786854
