var letter = function (x){
	this.show = false;
	this.self = x
	this.hide = "_"
}

letter.prototype.display = function(){
	if(this.self != " "){
		if(this.show){ return this.self }
		else{return this.hide}
	}else{
		return this.self
	}
}


module.exports = letter