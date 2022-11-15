/*

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock (10 seconds)

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and my score


*/



var startTest = document.getElementById('startTest');
var countdown = document.getElementById('countdown');
var timer = document.getElementById('timer');
var question = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var answerResult = document.getElementById('answerResult');
var endGame = document.getElementById('endGame');
var score = document.getElementById('score');
var highScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
var currentScore = {score: ""};




var questionJSON = 	{
					"questions": 
						[
							{ 	
								"question": "What is the value of 'typeof undefined == typeof NULL'?"
								, "choice1": "True"
								, "choice2": "False"
								, "choice3": "undefined"
								, "choice4": "Null"
								, "answer": 1
							},
							{ 	
								"question": "What would following code return? console.log(typeof typeof 1);"
								, "choice1": "number"
								, "choice2": "undefined"
								, "choice3": "string"
								, "choice4": "Null"
								, "answer": 3
							},
							{ 	
								"question": "What does console.log(1 < 2 < 3); output?"
								, "choice1": "True"
								, "choice2": "False"
								, "choice3": "undefined"
								, "choice4": "Null"
								, "answer": 1
							},
							{ 	
								"question": "What does console.log(3 > 2 > 1); output?"
								, "choice1": "True"
								, "choice2": "False"
								, "choice3": "undefined"
								, "choice4": "Null"
								, "answer": 2
							},
							{ 	
								"question": "What would following code return? console.log(false == '0');console.log(false === '0')"
								, "choice1": "True, True"
								, "choice2": "True, False"
								, "choice3": "False, True"
								, "choice4": "False, False"
								, "answer": 2
							}


						]
					};

	

var timerCount = 100;
var finalScore;
var questionCount = 0;

choice1.style.visibility = 'hidden';
choice2.style.visibility = 'hidden';
choice3.style.visibility = 'hidden';
choice4.style.visibility = 'hidden';
endGame.style.visibility = 'hidden';


startTest.addEventListener ('click', function()
		{

			var timeLeft = 1;

			startTest.style.visibility = 'hidden';
			countdown.textContent = "We will be starting in " + timeLeft + " seconds.";


			var timeInterval = setInterval(function () 
				{
				  if (timeLeft > 0) 
				  {
						countdown.textContent = "We will be starting in " + timeLeft + " seconds.";
						timeLeft = timeLeft - 1;
				  }
				  else
				  {
					  clearInterval(timeInterval);
					  countdown.textContent = "";
					  setupTest();
				  }
			  }
			  , 1000);
		}
	);


	runTimer = function()
	{
		var timerInterval = setInterval(function () 
		{
			if (timerCount > 0) 
			{
					timer.textContent = "Time Left: " + timerCount;
					timerCount = timerCount - 1;
			}
			else
			{
			clearInterval(timerInterval);
			runEnd();
			}
		}
		, 1000);
	}


	function setupTest() 
	{

		runTimer();

		choice1.style.visibility = 'visible';
		choice2.style.visibility = 'visible';
		choice3.style.visibility = 'visible';
		choice4.style.visibility = 'visible';

	
		runTest();
	}

	function runTest()
	{
	
		if(questionJSON.questions.length == questionCount)
		{
			runEnd();
			return;
		}

		var questionCountShow = questionCount + 1;
		question.textContent = "Question Number #" + questionCountShow + ". " + questionJSON.questions[questionCount].question;
		choice1.textContent = questionJSON.questions[questionCount].choice1;
		choice2.textContent = questionJSON.questions[questionCount].choice2;
		choice3.textContent = questionJSON.questions[questionCount].choice3;
		choice4.textContent = questionJSON.questions[questionCount].choice4;
	}


	choice1.addEventListener ('click', function()
		{
			if(questionJSON.questions[questionCount].answer != 1)
			{
				timerCount = timerCount - 10;
				answerResult.textContent = "Incorrect"
			}
			else
			{
				answerResult.textContent = "Correct"
			}

			questionCount = questionCount + 1;
			runTest();
		});

	choice2.addEventListener ('click', function()
		{
			if(questionJSON.questions[questionCount].answer != 2)
			{
				timerCount = timerCount - 10;
				answerResult.textContent = "Incorrect"
			}
			else
			{
				answerResult.textContent = "Correct"
			}

			questionCount = questionCount + 1;
			runTest();

		});

	choice3.addEventListener ('click', function()
		{
			if(questionJSON.questions[questionCount].answer != 3)
			{
				timerCount = timerCount - 10;
				answerResult.textContent = "Incorrect"
			}
			else
			{
				answerResult.textContent = "Correct"
			}

			questionCount = questionCount + 1;
			runTest();

		});

	choice4.addEventListener ('click', function()
		{
			if(questionJSON.questions[questionCount].answer != 4)
			{
				timerCount = timerCount - 10;
				answerResult.textContent = "Incorrect"
			}
			else
			{
				answerResult.textContent = "Correct"
			}

			questionCount = questionCount + 1;
			runTest();

		});
	
	function runEnd()
		{
			finalScore = timerCount;
			choice1.style.visibility = 'hidden';
			choice2.style.visibility = 'hidden';
			choice3.style.visibility = 'hidden';
			choice4.style.visibility = 'hidden';
			question.textContent = "";
			timer.style.visibility = 'hidden';
			timer.textContent = "";
			answerResult.textContent = "";
			enterScore.textContent = "Your score is: " + finalScore;

			endGame.style.visibility = 'visible';
		}


	submitInitials.addEventListener ('click', function()
	{

/*
signUpButton.addEventListener("click", function(event) {
	event.preventDefault();

	// TODO: Create user object from submission

	var userObject = {
		firstName: firstNameInput.value.trim()
		, lastName: lastNameInput.value.trim()
		, email: emailInput.value.trim()
		, password: passwordInput.value.trim()
	};

	// TODO: Set new submission to local storage 
	window.localStorage.setItem('user', JSON.stringify(userObject));

	console.log(JSON.parse(window.localStorage.getItem('user')));

*/

		currentScore.score = finalScore;
		currentScore.initials = document.querySelector('#initials').value;

		highScores.push(currentScore);
		localStorage.setItem("leaderboard.l", JSON.stringify(highScores));

//		window.localStorage.setItem('score', finalScore);
//		window.localStorage.setItem('initials', document.querySelector('#initials').value);


		endGame.textContent = 'Saved. Please reload to play again.';
	});
