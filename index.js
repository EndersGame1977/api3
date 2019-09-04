const server = require("../api3/api/server.js");

const port = 8001;
server.listen(port, () => console.log(`\n** API on port ${port} **\n`));
