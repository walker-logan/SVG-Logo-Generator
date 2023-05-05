const {Triangle, Square, Circle} = require("../lib/shapes.js")

// triangle test
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// square test
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

// circle test
describe("Circle test", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = Circle();
    shape.setColor("#ca00ca");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});