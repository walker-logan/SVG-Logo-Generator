const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

const buildSVG = (shape, color, text) => `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>
    ${shape.render()}
    <text x="150" y="130" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text>
  </g>
</svg>
`;