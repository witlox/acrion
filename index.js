'use strict';

const fs = require("fs");
let content = fs.readFileSync('questions.json');
let questions = JSON.parse(content);

module.exports = {

    /**
     * Generate a question
     * @return {string}
     */
    question: function() {
        return Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)]
    },

    /**
     * Submit an answer to the question
     * @param {string} question
     * @param {string} answer
     * @return {boolean}
     */
    answer: function(question, answer) {
        if (!(question in questions)) {
            return false;
        }
        return questions[question] === answer.toLocaleLowerCase();
    }
};
