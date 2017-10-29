function game(){
	this.list = ['bartender', 'she will always hate me', 'bonfire heart', 'someone singing along', 'do not give me those eyes'];
	this.chosen = this.list[ Math.floor(Math.random() * 5) ]
	this.number = 0;
}

module.exports = game;