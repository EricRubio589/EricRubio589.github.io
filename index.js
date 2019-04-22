
//When the start button is clicked we remove the initial section to start the quiz and //
//we show the section containing the questions//
function showQuestionsScreen() {
    $('.beginQuiz').on('click', '.beginButton', function beginButtonClicked(event) {
        console.log("beginButton clicked");
    event.preventDefault();    
    $('.beginQuiz').remove();
    $('.questionsContainer')
        .show()
        .append(questionTemplate(questionsAnswers[0]));
});
}

///this is the array of objects containing the questions ///
const questionsAnswers = [
    {
        toRespond:'this is the question',
        answer1:'first answer',
        answer2:'second answer',
        answer3:'third answer',
        answer4:'fourth answer'
    }
] 

///this is the html inserted for the mobile version of the quiz///
function questionTemplate(question) {
    return `
    <div id="questionForm">
        <span id="questionText">${question.toRespond}</span>
            <form>
                <fieldset>
                    <label>
                        <input class="answers" type="radio" name="answer" required>
                        <span>${question.answer1}</span>
                    </label>
                    <label>
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.answer2}</span>
                    </label>
                    <label>
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.answer3}</span>
                    </label>
                    <label>
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.answer4}</span>
                    </label>
                    <button id="submitAnswer">Submit</button>
                    </fieldset>
            </form>
    </div>
`;
}

function initQuizApp() {
    showQuestionsScreen();
    questionTemplate(questionsAnswers);
}

$(initQuizApp);
