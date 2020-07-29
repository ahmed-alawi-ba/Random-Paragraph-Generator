

function Word(){
	
	this.word = "";
	this.allWordsArray;
	
	
	
	
	this.getRandomWord = () =>{
		
		return googleDictionary[Math.floor(Math.random() * googleDictionary.length)].word;
		
	}
	
	
	
	
	
	
	this.getRandomLetterCount = () =>{
		return Math.floor(Math.random() * (10 - 2) ) + 2;
	}
	
	
	this.getWord = () => {
		this.word = this.getRandomWord();
		
		return this.word ;
	}
}
















