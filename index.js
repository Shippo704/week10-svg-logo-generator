//Required packages and classes
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');

class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
    }
    // Render the logo
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
            width="300" 
            height="300"
            >
            ${this.shape}${this.text}</svg>`
    }

    // Set the text
    setText(text, colour) {
        this.text = `<text 
            x="150" 
            y="200" 
            font-size="72" 
            text-anchor="middle" 
            fill="${colour}"
            >
            ${text}
            </text>`
    }

    // Set the shape
    setShape(shape) {
        this.shape = shape.render();
    }
}

// Array of questions for generating logo
const questions = [
    //Text
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text to appear on your logo (max. 3 characters): '
    },

    //Text Colour
    {
        type: 'input',
        name: 'textColour',
        message: 'Enter a colour for your text. Input either a colour name or a hexadecimal code in the format #RRGGBB: '
    },
    
    //Shape
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo: ',
        choices: [
            'Circle',
            'Triangle',
            'Square'
        ]
    },

    //Shape Colour
    {
        type: 'input',
        name: 'textColour',
        message: 'Enter a colour for your shape. Input either a colour name or a hexadecimal code in the format #RRGGBB: '
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log("Logo created successfully"));
}