const {Circle, Triangle, Square} = require('../lib/shapes');

describe('Shapes', () => {

    describe('Circle', () => {
        it ('should return the string for drawing a circle', () => {
            const circle = new Circle();
            const colour = "red";
            circle.setColour(colour);

            expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="150" height="100%" width="100%" fill="${colour}"/>`);
        });
    });

    describe('Triangle', () => {
        it ('should return the string for drawing a triangle', () => {
            const triangle = new Triangle();
            const colour = "green";
            triangle.setColour(colour);

            expect(triangle.render()).toEqual(`<polygon height="100%" width="100%" points="0,300 150,0 300,300" fill="${colour}"/>`);
        });
    });

    describe('Square', () => {
        it ('should return the string for drawing a square', () => {
            const square = new Square();
            const colour = "blue";
            square.setColour(colour);

            expect(square.render()).toEqual(`<rect x="50" height="250" width="250" fill="${colour}"/>`);
        });
    });

})