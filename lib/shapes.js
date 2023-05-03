const Shape = (color = "") => ({
  color,
  setColor(colorVar) {
    this.color = colorVar;
  },
});

// triangle
const Triangle = () => {
  const shape = Shape();
  return {
    ...shape,
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${shape.color}" />`;
    },
  };
};

const Square = () => {
  const shape = Shape();
  return {
    ...shape,
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${shape.color}" />`;
    },
  };
};

const Circle = () => {
  const shape = Shape();
  return {
    ...shape,
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${shape.color}" />`;
    },
  };
};

module.exports = { Triangle, Square, Circle };
