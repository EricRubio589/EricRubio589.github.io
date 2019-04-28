///We define the global variable that will hold the question index///

var questionIndex = 0;
var questionNumber = 1;
var score = 0;

//When the start button is clicked we remove the initial section to start the quiz and //
//we show the section containing the questions//
function showQuestionsScreen() {
    $('.beginQuiz').on('click', '#beginButton', function beginButtonClicked(event) {
        console.log("beginButton clicked");
    event.preventDefault();   
    $('.beginQuiz').hide();
    $('.questionAndAnswersContainer').show();
    renderQuestionAndAnswers();
    renderScoreAndQuestionBanner();
});
}

///this is the array of objects containing the questions ///
const questionsAnswers = [
    {
        toRespond:`What video game is widely considered the worst video game of all times and partially credited as
         responsible for the video game industry crash in 1983?`,
        ans:['E.T. the Extra-Terrestrial','Superman','Dr. Jekyll and Mr. Hide','The Cheetahmen',1]
    },

    {
        toRespond:`In 1991 the first console war took place between which 2 video game consoles?`,
        ans:['Nintendo Entertainment System and Sega Master System','Playstation and Nintendo 64',
        'Atari 2600 and Mattel Intellivision','Super Nintendo Entertainment System and Sega Genesis',4]
    },

    {
        toRespond:`This Iconic character debuted in the arcade game Donkey Kong in 1981 and was originally called Jumpman.`,
        ans:['Sonic','Donkey Kong','Mario','Link',3]
    },

    {
        toRespond:`This nonlinear game utilized a “rock paper scissors” mechanic that allowed the player to select which
         stage to play based on previous power-ups obtained granting an easier battle with said’s level final boss.`,
        ans:['The Legend of Zelda','Megaman','Rock paper scissors','Teenage Mutant Ninja Turtles',2]
    },

    {
        toRespond:`This 1986 video game combines the platforming of Super Mario Bros. and the adventure of The Legend
         of Zelda with a dark science fiction atmosphere and greater emphasis on nonlinear gameplay.`,
        ans:['Metroid','DuckTales','Bionic Commando','Castlevania',1]
    },

    {
        toRespond:`IT’S DANGEROUS TO GO ALONE! TAKE THIS” are the famous words said by an old man to this game’s main
         character as he hands him a sword to commence his quest.`,
        ans:['The Legend Of Zelda','Sword Master','ActRaiser','Prince of Persia',1]
    },

    {
        toRespond:`In this game the main character (Simon Belmont) utilizes a magic whip as his primary (but not only)
         weapon to defeat Count Dracula and other mythical creatures.`,
        ans:[`Bram Stoker's Dracula`,'Castlevania','Monster Party','ActRaiser',2]
    },

    {
        toRespond:`Bill Rizer and Lance Bean, are sent to the Galuga archipelago to destroy the enemy forces and uncover
         the true nature of Red Falcon, the alien entity controlling them in this game that utilizes a variety of playing 
         perspectives.`,
        ans:['Bionic Commando','Final Fantasy',`Ghosts 'n Goblins`,'Contra',4]
    },

    {
        toRespond:`This game is played from a first-person perspective and requires the NES Zapper light gun, which the 
        player aims and fires at the screen. first released in Japan in April 1984, and was released as a launch game 
        for the NES in North America in October 1985.`,
        ans:['Gumshoe','Laser Invasion','Barker Bills Trick Shooting','Duck Hunt',4]
    },

    {
        toRespond:`Combat in this game is menu-based: the player selects an action from a list of options such as Attack, 
        Magic, and Item. Battles are turn-based and continue until either side flees or is defeated. If the player's party 
        wins, each character will gain experience and Gil (The game’s currency).`,
        ans:['Final Fantasy','Dungeons and Dragons','EarthBound','Dragon Warrior',1]
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
                        <span>${question.ans[0]}</span>
                    </label>
                    <label class="answerBox">
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.ans[1]}</span>
                    </label>
                    <label class="answerBox">
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.ans[2]}</span>
                    </label>
                    <label class="answerBox">
                            <input class="answers" type="radio" name="answer" required>
                            <span>${question.ans[3]}</span>
                    </label>
                    <button type="submit" class="submitAnswerButton">Submit</button>

                    <div class="scoreAndQuestionNumberDisplay">
                        <span class="displayQuestionInBody">Question ${questionIndex+1}/10</span>
                        <span class="displayScoreInBody">Score ${score}/10</span>
                    </div>
                </fieldset>
            </form>
    </div>
`;
}

////this function will handle the HTML inserted for the wrong answer feedback////
function wrongAnswerTemplate() {
    var answerIndex = questionsAnswers[questionIndex-1].ans[4];
    var correctAnswerText = questionsAnswers[questionIndex-1].ans[answerIndex-1];
    return `
    <div id="wrongFeedbackContainer">
        <form id="wrongFeedbackForm">
            <span id="wrongFeedbackText">Wrong answer</span>
            <span id="showCorrectAnswerText">The correct answer was ${correctAnswerText}</span>
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

function goodFinalScoreTemplate() {
    return `
    <div id="correctFeedbackContainer">
        <form id="correctFeedbackForm">
            <span id="correctFeedbackText">Good Job! Your Final Score Was ${score}/10 </span>
            <img id="correctFeedbackImage" src="https://media.giphy.com/media/Rs2iAnfEImXIs/giphy.gif" alt="Duck Hunt dog showing you the ducks you hit">
            <button type="submit" class="restartButton">Restart quiz</button>
        </form>
    </div>
    `
}

function badFinalScoreTemplate() {
    return `
    <div id="correctFeedbackContainer">
        <form id="correctFeedbackForm">
            <span id="correctFeedbackText">Your Final Score Was ${score}/10 </span>
            <img id="correctFeedbackImage" src="https://media.giphy.com/media/E73bJJSMHMRsQ/giphy.gif" alt="Duck Hunt dog laughing at you">
            <button type="submit" class="restartButton">Restart quiz</button>
        </form>
    </div>
    `
}

function scoreAndQuestionBannerTemplate() {
    return `<span class="displayQuestionInBanner">Question ${questionIndex+1}/10</span>
    <span class="displayScoreInBanner">Score ${score}/10</span>`
}

////this function will handle the submit answer button being activated////
function handleSubmitAnswerButton() {
    $('.questionAndAnswersContainer').on('submit', 'form', function submitButtonClicked(event) {
        event.preventDefault();
        $('.questionAndAnswersContainer').hide();
        const submittedAnswer = $('input:checked').closest('label').index();
        console.log(submittedAnswer);
        checkIfCorrectOrWrong(submittedAnswer, questionsAnswers[questionIndex]);
        if ($(window).width() > 499) {
            $('.displayQuestionInBody').hide();
            $('.displayScoreInBody').hide();
            renderScoreAndQuestionBanner();
        }
        });
}

////here we will check if the answer is correct////
function checkIfCorrectOrWrong(answer, compareValues) {
    if (answer + 1 === compareValues.ans[4]) {
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
        if (questionIndex < 10) {
        renderQuestionAndAnswers();
        $('.feedbackContainer').hide();
        $('.questionAndAnswersContainer').css('display','flex');
        } else {
            handleFinalScore();
        }  
    });
}

///Here we will render the score and quesiton number in the banner ///
function renderScoreAndQuestionBanner() {
    /*$(`.scoreAndQuestionBannerDisplay`).show();*/
    $(`.scoreAndQuestionBannerDisplay`).html(scoreAndQuestionBannerTemplate);
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
function handleFinalScore() {
    $('.feedbackContainer').hide();
    if (score > 5) {
        $('.feedbackContainer').show().html(goodFinalScoreTemplate);
    } else {
        $('.feedbackContainer').show().html(badFinalScoreTemplate)
    }
}

function initQuizApp() {
    showQuestionsScreen();
    handleSubmitAnswerButton();
    handleNextButton();
}

$(initQuizApp);
