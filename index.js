const express = require("express");

const webserver = express();

const port = 3060;

webserver.get("/", (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.send(
      `<form method=get action=http://localhost:3060/>
      <span>login</span>
      <input type=text name=login></input><br/>
      <span>password</span>
      <input type=text name=password></input><br/>
      <input type=submit value=submit>
      </form>`
    );
  }
  if (req.query.login && req.query.password) {
    res.send(
      `<form method=get action=http://localhost:3060/>
      <span>login</span>
      <input type=text name=login></input><strong>your login: ${req.query.login}</strong><br/>
      <span>password</span>
      <input type=text name=password></input><strong>your password: ${req.query.password}</strong><br/>
      <input type=submit value=submit>
      </form>`
    );
  } else {
    res.send(
      `<form method=get action=http://localhost:3060/>
      <span>login</span>
      <input type=text name=login value=${req.query.login}></input><strong>validation error</strong><br/>
      <span>password</span>
      <input type=text name=password value=${req.query.password}></input><strong>validation error</strong><br/>
      <input type=submit value=submit>
      </form>`
    );
  }
});

webserver.listen(port, () => {
  console.log("web server running on port " + port);
});
