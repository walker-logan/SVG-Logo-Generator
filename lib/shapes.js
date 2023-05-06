const Shape = function (color = "") {
  return {
    color,
    setColor(colorVar) {
      this.color = colorVar;
    },
  };
};

// triangle
const Triangle = function () {
  const shape = Shape();
  return {
    ...shape,
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    },
  };
};

const Square = function () {
  const shape = Shape();
  return {
    ...shape,
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    },
  };
};

const Circle = function () {
  const shape = Shape();
  return {
    ...shape,
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    },
  };
};

module.exports = { Triangle, Square, Circle };
