Acrion
=========

A small library that tries to validate users are human, by Q&A.

## Installation

  `npm install @witlox/acrion`

## Usage

    let qa = require('@witlox/acrion');
    let question = qa.question();
  
  Generates a random question
  
    let qa = require('@witlox/acrion');
    let question = qa.question();
    let result = qa.answer(question, 'some answer');
  
  Returns true when answered correctly (case insensitive), otherwise false.

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.