var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.end(
    `<!DOCTYPE html>
<html>
<head>
    <title>A website about Me</title>
</head>
<body>
    <h1>Hello, I'm Lorien!</h1>rm -rf .git
    <h2>Computer Science Student</h2>
    <p>I study at Goldsmiths in London. I enjoy hiking and exploring tech.</p>
</body>
</html>`);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
