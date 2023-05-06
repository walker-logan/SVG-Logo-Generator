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
    this.width = 200;
    this.height = 200;
  }

  render() {
    return `
      <rect x="0" y="0" width="${this.width}" height="${this.height}" fill="${this.color}" />
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
      <circle cx="100" cy="100" r="${this.radius}" fill="${this.color}" />
    `;
  }
}

module.exports = { Triangle, Square, Circle };
