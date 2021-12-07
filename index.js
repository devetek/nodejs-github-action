const { createServer } = require("http");

class CustomServer {
    startServer() {
        createServer(async (req, res) => {
        res.setHeader("Content-Type", "text/html");
        res.write("<br />Sample sample page 1<br />"); //write a response to the client
      res.end(); //end the response
            res.end();
        }).listen(8080);
    }
};

module.exports = { CustomServer };

