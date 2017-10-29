var inquirer = require('inquirer')
var word = require('./word.js')
var number = 0;
var chosen = 'arch itecture'
var guessWord = new word(chosen)

function show(){
	//console.log (guessWord.letterArray().join(" "))
	if(number < guessWord.length()){
		var questions = question();
		inquirer.prompt(questions).then(function(answer){
			
			guessWord.checkLetter(answer.guess);
			number ++;
			
			if(guessWord.win != true){
				console.log(`You have ${guessWord.length - number} chances left`)
				show()
			}else{
				console.log(chosen)
			}
			
		})
		

	}else{
	console.log("You lose")
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
			message: `chosen \n Do you want a new Game?`
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
