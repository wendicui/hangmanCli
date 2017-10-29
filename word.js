var letter = require('./letter.js');

var word = function(x){
	this.target = x;
	//this.orig = x.split("")
	this.array = x.split("");
	this.left = this.length();
	this.letters = this.letterObjects()
	this.win = false;


}

word.prototype.length = function(x){
	x = this.array
	var space = 0;
	for (var i = 0; i < x.length; i++) {
		if (x[i] != " "){
			space ++
		}
	}
	return space
}

word.prototype.letterObjects = function(){
	var letterObjectArray = []
	for (var i = 0; i < this.array.length; i++) {
		var newletter = new letter(this.array[i]);	
		letterObjectArray.push(newletter)
	}

	return letterObjectArray
}


word.prototype.letterArray = function(ab){
//create the array to be displayed
	ab = this.letters;
	var letterArrays = []
	for (var i = 0; i < ab.length; i++) {
			letterArrays.push(ab[i].display())
		}	
	return letterArrays
	//console.log(letterArrays)
}

word.prototype.checkLetter = function(y){
//get indexes of the letter if corrected
			
	var indexes = this.array.reduce(function(a,v,i){
		if (v === y){ a.push(i)};
		return a
	},[])

	if (indexes.length > 0){
//regenerate and displa letter Array

		this.left -= indexes.length;
		console.log("correct answer!")
		for (var i = 0; i < indexes.length; i++) {
		this.letters[indexes[i]].show = true;
	
		this.letterArray()
		//console.log(this.left + '__________________')

		}
		//console.log(this.tobeDispalyed)

	}else{
		console.log("wrong answer")
	}

	this.result()
	
}

word.prototype.result = function(){
	if(this.left <= 0){
		console.log("winning")
		this.win = true;
	}
}

module.exports = word

// var trail = new word("arch new")
// console.log(trail.length());
//trail.checkLetter('a')

//console.log(trail.letterArray());