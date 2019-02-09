function Quiz() {
  this.questions = [];
  this.currentIdx = 0;
  this.currentChoices = [];
  this.score = 0;
}

Quiz.prototype.setQuestions = function(...qns){
  let self = this;

  if(typeof qns !== 'undefined') {
    Array.of(qns).map( (x, idx) => {
      self.questions = Object.assign([], x)
    })
  }

  return self.questions;
}

Quiz.prototype.getQns = function() {
  return this.questions[this.currentIdx].question
}

Quiz.prototype.getChoices = function() {
  let self = this;

  self.questions[self.currentIdx].choices.map( (el, i) => {
    self.currentChoices[i] = (i+1) + ': ' + el + '\n'
  })

  return self.currentChoices.toString().replace(/,/g, '')
}

Quiz.prototype.checkUserChoice = function(userChoice) {
  let originalScore = this.score;

  return this.score = this.questions[this.currentIdx].answer == userChoice ? originalScore+1 : originalScore;
}

Quiz.prototype.nextQn = function() {
  this.currentIdx++;
  return this.getQns(this.currentIdx);
}

function Question(question, choices, answer) {
  this.question = question;
  this.choices = [];
  this.answer = answer;

  this.setChoices(choices);

  return {
    question: this.question,
    choices: this.choices,
    answer: this.answer
  }
}

Question.prototype.setChoices = function(ele) {
  let self = this,
      i = 0;

  if(typeof ele !== 'undefined') {
    for (i; i < 4; i++) {
      typeof ele[i] == 'undefined' ? self.choices.push('NA') :
        self.choices.push(ele[i])
    }
  }

  return self.choices;
}

module.exports = { Quiz, Question }
