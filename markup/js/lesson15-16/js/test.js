'use strict';

class Test{

    constructor(question, answers,rightAnswers){
        this.question = question;
        this.answers = answers;
        this.rightAnswers = rightAnswers;
    }
}

var question = prompt('enter your question?');
var answers = +prompt('enter your answer');
var rightAnswers = +prompt('enter right answers');

class TestRadio extends Test{
    constructor(question, answers, rightAnswer){
        super(question, answers);
    }

};
