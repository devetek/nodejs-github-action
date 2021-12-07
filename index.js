import { createServer } from "http";

//create a server object:
createServer(async function (req, res) {
  console.log(`Reequest start from ${req.url}`);
  res.setHeader("Content-Type", "text/html");
    res.write("<br />Sample sample page<br />"); //write a response to the client
    res.end(); //end the response
}).listen(3000); //the server object listens on port 8080
