// Parent class containing common elements of all Shapes
class Shape {
    constructor() {
        this.colour = '';
    }

    setColour(colour) {
        this.colour = colour;
    }
}

// Circle subclass that renders the circle shape
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="150" height="100%" width="100%" fill="${this.colour}"/>`;
    }
}

// Triangle subclass that renders the triangle shape
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,300 150,0 300,300" fill="${this.colour}"/>`;
    }
}

// Square subclass that renders the square shape
class Square extends Shape {
    render() {
        return `<rect x="50" height="250" width="250" fill="${this.colour}"/>`;
    }   
}

module.exports = {Circle, Triangle, Square}