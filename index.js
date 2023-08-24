//Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('generate-svg');

// array of questions for generating logo
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