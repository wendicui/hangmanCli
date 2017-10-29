var inquirer = require('inquirer')
var word = require('./word.js')
var number = 0;
var chosen = 'arch itecture'
var guessWord = new word(chosen)
var chance = guessWord.length()
var guessed = []

function show(){
	//console.log (guessWord.letterArray().join(" "))
	if(number < chance){
		var questions = question();
		inquirer.prompt(questions).then(function(answer){
	//check if user inputed this before, so that people can not input the same correct letter to win
			 
			function checkBefore(){
				for (var i = 0; i < guessed.length; i++) {
					if(guessed[i] === answer.guess){
						return true
					}
				}
			}

			if(checkBefore()){ 
				console.log("you have typed this")
				number++;
				console.log(`You have ${chance - number} chances left`)
				show()
			}

			else{
				guessed.push(answer.guess)

				guessWord.checkLetter(answer.guess);
				number ++;
				
				if(guessWord.win != true){
					console.log(`You have ${chance - number} chances left`)
					show()
				}else{
					console.log(chosen)
					newgame()
				}
			}
		})
		

	}else{
	console.log("You lose")
	newgame();
}
}

function question() {
	var questions = [
		{	
			name:'guess',
			type:'input',
			message: guessWord.letterArray().join(" ")
		}
		]
		return questions
}

function newgame(){
	var questions = [
			{	
			name:'newGame',
			type:'confirmation',
			message: `${chosen.split("").join(" ")} \n Do you want a new Game?`
		}
	]

	inquirer.prompt(questions).then(function (answer){
		if(answer.newGame){
			console.log("new gaming")
		}
	})
}
show();
//trial
