// start your server here
const server = require("./api/server");

const PORT = process.env.PORT || 9000;

server.listen(port, () => {
  console.log(`Server listening on port ${PORT}.`);
});
