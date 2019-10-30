'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;

let questions = require('../data').questions;
let qa = require('../index');

describe('#acrionQuestionAnswer', function() {
    it('should return a random question from our list', function() {
        let result = qa.question();
        expect(Object.keys(questions)).to.include(result);
    });

    it('should return false on a random input', function() {
        let result = qa.answer('question', 'answer');
        assert(result === false);
    });

    it('should return false on a random answer', function() {
        let question = qa.question();
        let result = qa.answer(question, 'random');
        assert(result === false);
    });

    it('should return true on a correct answer (case-insensitive)', function() {
        let question = qa.question();
        let answer = questions[question];
        let result = qa.answer(question, answer.toUpperCase());
        assert(result === true);
    });

});