///We define the global variable that will hold the question number///

var questionIndex = 0;
var score = 0;

//When the start button is clicked we remove the initial section to start the quiz and //
//we show the section containing the questions//
function showQuestionsScreen() {
    $('.beginQuiz').on('click', '#beginButton', function beginButtonClicked(event) {
        console.log("beginButton clicked");
    event.preventDefault();   
    $('.beginQuiz').remove();
    $('.questionAndAnswersContainer').show();
    renderQuestionAndAnswers();
    handleSubmitAnswerButton();
});
}

///this is the array of objects containing the questions ///
const questionsAnswers = [
    {
        toRespond:'What video game is widely considered the worst video game of all times and partially credited as responsible for the video game industry crash in 1983?',
        ans:{
            one:'E.T. the Extra-Terrestrial',
            two:'Superman',
            three:'Dr. Jekyll and Mr. Hide',
            four:'The Cheetahmen',
            correct:1
        }
    },

    {
        toRespond:'In 1991 the first console war took place between which 2 video game consoles?',
        ans:{
            one:'Nintendo Entertainment System and Sega Master System',
            two:'Playstation and Nintendo 64',
            three:'Atari 2600 and Mattel Intellivision',
            four:'Super Nintendo Entertainment System and Sega Genesis',
            correct:4
        }
    },

    {
        toRespond:'This Iconic character debuted in the arcade game Donkey Kong in 1981 and was originally called Jumpman.',
        ans:{
            one:'Sonic',
            two:'Donkey Kong',
            three:'Mario',
            four:'Link',
            correct:3
        }
    },

    {
        toRespond:'This nonlinear game utilized a “rock paper scissors” mechanic that allowed the player to select which stage to play based on previous power-ups obtained granting an easier battle with said’s level final boss.',
        ans:{
            one:'The Legend of Zelda',
            two:'Megaman',
            three:'Rock paper scissors',
            four:'Teenage Mutant Ninja Turtles',
            correct:2
        }
    },

    {
        toRespond:'This 1986 video game combines the platforming of Super Mario Bros. and the adventure of The Legend of Zelda with a dark science fiction atmosphere and greater emphasis on nonlinear gameplay.',
        ans:{
            one:'Metroid',
            two:'DuckTales',
            three:'Bionic Commando',
            four:'Castlevania',
            correct:1
        }
    },

    {
        toRespond:'IT’S DANGEROUS TO GO ALONE! TAKE THIS” are the famous words said by an old man to this game’s main character as he hands him a sword to commence his quest.',
        ans:{
            one:'The Legend Of Zelda',
            two:'Sword Master',
            three:'ActRaiser',
            four:'Prince of Persia',
            correct:1
        }
    },

    {
        toRespond:'In this game the main character (Simon Belmont) utilizes a magic whip as his primary (but not only) weapon to defeat Count Dracula and other mythical creatures.',
        ans:{
            one:`Bram Stoker's Dracula`,
            two:'Castlevania',
            three:'Monster Party',
            four:'ActRaiser',
            correct:2
        }
    },

    {
        toRespond:'Bill Rizer and Lance Bean, are sent to the Galuga archipelago to destroy the enemy forces and uncover the true nature of Red Falcon, the alien entity controlling them in this game that utilizes a variety of playing perspectives.',
        ans:{
            one:'Bionic Commando',
            two:'Final Fantasy',
            three:`Ghosts 'n Goblins`,
            four:'Double Dragon',
            correct:4
        }
    },

    {
        toRespond:'This game is played from a first-person perspective and requires the NES Zapper light gun, which the player aims and fires at the screen. first released in Japan in April 1984, and was released as a launch game for the NES in North America in October 1985.',
        ans:{
            one:'Gumshoe',
            two:'Laser Invasion',
            three:'Barker Bills Trick Shooting',
            four:'Duck Hunt',
            correct:4
        }
    },

    {
        toRespond:`Combat in this game is menu-based: the player selects an action from a list of options such as Attack, Magic, and Item. Battles are turn-based and continue until either side flees or is defeated. If the player's party wins, each character will gain experience and Gil (The game’s currency).`,
        ans:{
            one:'Final Fantasy',
            two:'Dungeons and Dragons',
            three:'EarthBound',
            four:'Dragon Warrior',
            correct:1
        }
    }
]

///Here we render the questions ///
function renderQuestionAndAnswers() {
    $('.questionAndAnswersContainer').html(questionTemplate(questionsAnswers[questionIndex]));
}

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
                        <span>Score ${score}/10</span>
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
        <form id="wrongFeedbackForm">
            <span id="wrongFeedbackText">Wrong answer</span>
            <img id="wrongFeedbackImage" src="https://media.giphy.com/media/iZCd5DtKEiMq4/giphy.gif" alt="tumbling Wario in defeat">
            <button class="continueButton">Continue</button>
        </form>
    </div>
    `
}

////this function will handle the HTML inserted for the correct answer feedback////
function correctAnswerTemplate() {
    return `
    <div id="correctFeedbackContainer">
        <form id="correctFeedbackForm">
            <span id="correctFeedbackText">Correct!</span>
            <img id="correctFeedbackImage" src="https://media.giphy.com/media/6m9oKO7A1k6Os/giphy.gif" alt="dancing karate guy">
            <button class="continueButton">Continue</button>
        </form>
    </div>
    `
}

////this function will handle the submit answer button being activated////
function handleSubmitAnswerButton() {
    $('#mainContainer').on('click', '.submitAnswerButton', function submitButtonClicked(event) {
        event.preventDefault();
        /*console.log("submit button clicked");*/
        $('.questionAndAnswersContainer').css('display','none');
        const submittedAnswer = $('input:checked').parent().index();
        console.log(submittedAnswer);
        checkIfCorrectOrWrong(submittedAnswer, questionsAnswers[questionIndex]);
        });
}

////here we will check if the answer is correct////
function checkIfCorrectOrWrong(answer, compareValues) {
    if (answer + 1 === compareValues.ans.correct) {
        score ++;
        questionIndex ++;
        correctAnswerFeedback();
    } else {
        questionIndex ++;
        wrongAnswerFeedback();
    }
    handleNextButton();
}

////with this function we will handle the next button submit////
function handleNextButton() {
    $('#mainContainer').on('click', '.continueButton', function nextButtonClicked(event) {
        event.preventDefault();
        console.log("Button Next Clicked");
        renderQuestionAndAnswers();
        $('.feedbackContainer').remove();
        $('.questionAndAnswersContainer').css('display','flex');
    });
}

////this is what we will display in case the answer was wrong////
function wrongAnswerFeedback() {
    $(`.feedbackContainer`).show().html(wrongAnswerTemplate);
}

////this is what we will display in case the answer was correct////
function correctAnswerFeedback() {
    $(`.feedbackContainer`).show().html(correctAnswerTemplate);
}

////with this we will handle the score after submiting the answer////
function handleScore() {
    
}

function initQuizApp() {
    renderQuestionAndAnswers();
    showQuestionsScreen();
    questionTemplate();
    handleSubmitAnswerButton();
    checkIfCorrectOrWrong();
    handleNextButton();
    wrongAnswerFeedback();
    wrongAnswerTemplate();
    correctAnswerFeedback();
    correctAnswerTemplate();
    handleScore();
}

$(initQuizApp);
