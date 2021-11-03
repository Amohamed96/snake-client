const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

conn.on("connect", () => {
  console.log("Connecting ...");
  console.log("Your snake is ready!");
});
conn.on('connect', () => {
  conn.write('Name: LB');
});
};


module.exports = {connect};