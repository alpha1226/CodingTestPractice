const line = require("fs").readFileSync("/dev/stdin", "utf8");

let [firstLine, ...data] = line