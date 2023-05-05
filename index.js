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

const writeToFile = (fileName, svgString) => {
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("#######");
  });
};

const promptUser = () => 
inquirer.prompt([
  {
    type: "input",
    message:
    "Enter up to three characters you want your logo to be.",
    name: "text",
  },
  {
    type: "input",
    message:
    "Enter the desired color of the text (color keyword or hexadecimal number).",
    name: "textColor",
  },
  {
    type: "list",
    message:
    "What shape do you want it?",
    name: "shape",
  },
  {
    type: "input",
    message:
    "Enter the desired color of the shape (color keyword or hexadecimal number).",
    name: "shapeBackground",
  }

])
