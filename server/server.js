const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000; // use PORT if available, if not, use 3000

app.use(express.static(publicPath));

// this lets us set up some function to run when someone makes a request to our server. the 2nd arg is the func to run
// app.get('/create')
app.get("*", (request, response) => {
  // we use * to match all unmatched routes
  // the request object contains some info about the request
  // the response object lets you manipulate the response your express server makes to whoever made the HTTP request

  response.sendFile(path.join(publicPath, "index.html"));
});

// use port 3000 which is available on all OS. something you should be able to listen to for development purposes without getting any warnings from your OS
app.listen(port, () => {
  console.log("Server is up");
});
