const expect = require('chai').expect;
const Quiz = require("../app/quiz").Quiz
const Question = require("../app/quiz").Question;

describe('Quiz()', function(){
  const q1 = new Question('Choose A', ['A', 'B', 'C', 'D', 'E'], 1),
        q2 = new Question('Choose B', ['D', 'E', 'F', 'B'], 4),
        q3 = new Question('Choose D', ['D', 'E'], 1),
        quiz = new Quiz();

  quiz.setQuestions(q1, q2, q3);
  quiz.questions[5235] = {}
  quiz.questions[5235].question = 'Choose Z'
  quiz.questions[5235].choices = ['A', 'Z', 'E']
  quiz.questions[5235].answer = 1

  it('should have an object for Question', function() {
    expect(q1).to.be.an('object');
    expect(q2).to.be.an('object');
  })

  it('should be populated with questions and 4 choices', function() {
    expect(quiz.questions).to.be.an('array');
    expect(quiz.questions[0].choices).to.have.lengthOf(4).that.does.not.include('E');
    expect(quiz.questions[1].choices).to.have.lengthOf(4);
    expect(quiz.questions[2].choices).to.have.lengthOf(4).that.include('NA');
  })

  it('should ask loop through questions one question at a time', function() {
    quiz.currentIdx = 0;
    expect(quiz.getQns()).equal('Choose A');
    expect(quiz.getChoices()).to.include('2: B');

    quiz.currentIdx = 2;
    expect(quiz.getQns()).equal('Choose D');
  })

  it('should receive user input and checked the answer', function() {
    quiz.currentIdx = 0;
    quiz.checkUserChoice(1); // Correct answer
    expect(quiz.score).equal(1);

    quiz.currentIdx = 1;
    quiz.checkUserChoice(2) // Wrong answer

    quiz.currentIdx = 2;
    quiz.checkUserChoice(1) // Correct answer
    expect(quiz.score).equal(2)
  })

  it('should retrieve the next question', function() {
    quiz.currentIdx = 0;

    expect(quiz.currentIdx).equal(0);

    quiz.nextQn();
    expect(quiz.currentIdx).equal(1);

    quiz.currentIdx = 5234;
    expect(quiz.currentIdx).equal(5234);

    quiz.nextQn();
    expect(quiz.currentIdx).equal(5235);
  })
})
