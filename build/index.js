"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = 3001;
app.get("/", (req, res) => {
  res.send("<h1>API WORKS KEVINCODIGO 2</h1>");
});
app.listen(PORT, () => {
  console.log(`SERVER RUNNING IN PORT ${PORT}`);
});