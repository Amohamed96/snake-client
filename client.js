const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
conn.setEncoding("utf8");

conn.on("connect", () => {
  console.log("Connecting ...");
  console.log("Your snake is ready!");
});
conn.on('connect', () => {
  conn.write('Name: LB');
});
return conn; // Object that has references to the connection
};


module.exports = {connect};

// conn.on('connect', () => {
//   setInterval(() => {
//   conn.write('Move: left')
//   }, 200)
//   setInterval(() => {
//     conn.write('Move: down')
//     }, 200)
  
// });