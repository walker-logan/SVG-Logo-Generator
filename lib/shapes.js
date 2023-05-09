class Shape {
  constructor(color = "") {
    this.color = color;
  }

  setColor(colorVar) {
    this.color = colorVar;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.width = 200;
    this.height = 200;
  }

  render() {
    return `
      <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    `;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.width = 120;
    this.height = 120; 
  }

  render() {
    return `
    <rect x="73" y="40" width="160" height="160" fill="${this.color}" />
    `;
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
    this.radius = 80;
  }

  render() {
    return `
    <circle cx="150" cy="115" r="80" fill="${this.color}" />
    `;
  }
}


module.exports = { Triangle, Square, Circle };
