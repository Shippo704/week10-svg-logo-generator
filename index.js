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

// Function to write the SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log("Logo created successfully"));
}

// Function to initialize app
async function init() {
    // Initialize variables
    let userText = '';
    let userShape = '';
    let svgString = '';
    let svgFileName = 'logo.svg'

    // Prompt the user to answer questions
    const answers = await inquirer.prompt(questions);

    // Check if text length is valid
    if (answers.text.length>0 && answers.text.length<4) {
        userText = answers.text;
    }
    // Return error message if invalid text length
    else {
        return console.log("Invalid text entry. Must be 1-3 characters in length.")
    }

    // Select correct shape class
    if (answers.shape === 'Circle') {
        userShape = new Circle();
    }
    else if (answers.shape === 'Triangle') {
        userShape = new Triangle();
    }
    else if (answers.shape === 'Square') {
        userShape = new Square();
    }
    else {
        return console.log('Somehow you selected an option not from the list.');
    }

    // Set the colour of the shape
    userShape.setColour(answers.colour);

    // Create the svg
    let svg = new SVG();
    svg.setText(userText, answers.textColour);
    svg.setShape(userShape);
    svgString = svg.render();

    //Create the logo.svg file
    writeToFile(svgFileName, svgString);

}

// Run the app
init();