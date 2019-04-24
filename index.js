///We define the global variable that will hold the question number///

var questionIndex = 0;

//When the start button is clicked we remove the initial section to start the quiz and //
//we show the section containing the questions//
function showQuestionsScreen() {
    $('.beginQuiz').on('click', '#beginButton', function beginButtonClicked(event) {
        console.log("beginButton clicked");
    event.preventDefault();   
    $('.beginQuiz').remove();
    $('.questionAndAnswersContainer')
        .show()
        .append(questionTemplate(questionsAnswers[questionIndex]));
});
}

///this is the array of objects containing the questions ///
const questionsAnswers = [
    {
        toRespond:'this is the question',
        ans:{
            one:'first answer',
            two:'second answer',
            three:'third answer',
            four:'fourth answer',
            correct:2
        }
    }
] 

///this is the html inserted for the mobile version of the quiz///
function questionTemplate(question) {
    return `
    <div class="questionFormContainer">
        <div class="questionBox">
            <span class="questionText">${question.toRespond}</span>
        </div>    
            <form class="questionForm">
                <fieldset class="answersContainer">
                    <label class="answerBox">
                        <input class="answers" type="radio" name="answer" required>
                        <span>${question.ans.one}</span>
                    </label>
                    <label class="answerBox">
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.ans.two}</span>
                    </label>
                    <label class="answerBox">
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.ans.three}</span>
                    </label>
                    <label class="answerBox">
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.ans.four}</span>
                    </label>
                    <button type="submit" class="submitAnswerButton">Submit</button>

                    <div class="scoreAndQuestionNumberDisplay">
                        <span>Question 1/10</span>
                        <span>Score 0/10</span>
                    </div>
                </fieldset>
            </form>
    </div>
`;
}

////this function will handle the HTML inserted for the wrong answer feedback////
function wrongAnswerTemplate() {
    return `
    <div id="wrongFeedbackContainer">
        <span id="wrongFeedbackText">Wrong answer</span>
        <img id="wrongFeedbackImage" src="https://media.giphy.com/media/iZCd5DtKEiMq4/giphy.gif" alt="tumbling Wario in defeat">
        <button id="wrongFeedbackContinueButton">Continue</button>
    </div>
    `
}

////this function will handle the HTML inserted for the correct answer feedback////
function correctAnswerTemplate() {
    return `
    
    `
}

////this function will handle the submit answer button being activated////
function handleSubmitAnswerButton() {
    $('#mainContainer').on('click', '.submitAnswerButton', function submitButtonClicked(event) {
            event.preventDefault();
            console.log("submit button clicked");
            $('.questionAndAnswersContainer').css('display','none');
            /*$(`.feedbackContainer`).show().append(wrongAnswerTemplate);*/
        });
}

////this is what we will display in case the answer was wrong////
function wrongAnswerFeedback() {

}

////this is what we will display in case the answer was correct////
function correctAnswerFeedback() {

}

////with this we will handle the score after submiting the answer////
function handleScore() {
    
}

function initQuizApp() {
    showQuestionsScreen();
    questionTemplate();
    handleSubmitAnswerButton();
    wrongAnswerFeedback();
    wrongAnswerTemplate();
    correctAnswerFeedback();
    correctAnswerTemplate();
    handleScore();
}

$(initQuizApp);
