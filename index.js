const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

// function to build the svc string
const buildSVG = (shape, color, text, textColor) => `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <g>
    ${shape.render()}
    <text x="130" y="110" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text>
  </g>
</svg>
`;


// function to create the appropriate shape based on user input using switch case. learned this from stack overflow. the way i understand it is a switch statement allows you to do different things based on the value of a specific variable. kinda like if else but more useful when theres many cases to handle.
const createShape = (shapeType, shapeColor) => {
  switch (shapeType) {
    case "triangle":
      return new Triangle(shapeColor);
    case "square":
      return new Square(shapeColor);
    case "circle":
      return new Circle(shapeColor);
    default:
      throw new Error("Invalid shape type");
  }
};

const writeToFile = (fileName, svgString) => {
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Your SVG has been generated! It is in the root directory labeled as logo.svg");
  });
};

// prompting the user
const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      message: "Enter up to three characters you want your logo to be.",
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
      message: "What shape do you want?",
      name: "shape",
      choices: ["triangle", "square", "circle"],
    },
    {
      type: "input",
      message:
        "Enter the desired color of the shape (color keyword or hexadecimal number).",
      name: "shapeBackground",
    },
  ]);

// function to handle user input and call the writeToFile function
const handleAnswers = (answers) => {
  // err handling for text prompt
  if (answers.text.length > 3) {
    console.log("Please enter a value of no more than 3 characters!");
    promptUser().then(handleAnswers);
  } else {
    const shape = createShape(answers.shape, answers.shapeBackground);
    const svgString = buildSVG(shape, answers.shapeBackground, answers.text, answers.textColor);
    // calling write file function to actually generate the svg
    writeToFile("logo.svg", svgString);
  }
};

// one last time
const main = () => {
  promptUser().then(handleAnswers);
};

// get'er started
main();
