'use strict';

const jf = require('jsonfile');

let questions = jf.readFileSync('questions.json');

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
