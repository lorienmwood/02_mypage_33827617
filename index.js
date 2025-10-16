var http = require("http");

const port = 8000;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.end(
      `<!DOCTYPE html>
<html>
<head>
    <title>A website about Me</title>
    <style>
    body {background-color: black;
    color: white;}
    img {max-width: 30%;
    height: {max-height: 30%;}
    </style>
</head>
<body>
    <h1>Hi, I'm Lorien!</h1>
    <h2>I'm studying Computer Science at Goldsmiths, University of London.</h2>
    <p>In my free time, I love hiking. Here are some trails on my bucket list.</p>
    <img src="https://www.pcta.org/wp-content/uploads/2019/12/PCT-overview-map-on-2-pages-by-Magellan-pg1.v.1.2018.jpg" alt="PCT">
    <img src=" https://images.squarespace-cdn.com/content/v1/529bb15fe4b06bb4b8f6a9d1/1537035101406-PSMZEMSZI13T9BRWN3A7/Te+Araroa.jpg" alt="TA">
   

</body>
</html>`
    );
  })
  .listen(port, function () {
    console.log(`Node server is running on port ${port}...`);
  });
