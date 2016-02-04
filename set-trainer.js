docReady(function() { 
	console.log ("yeee");
	// var allCards = new Cards(4,3);
	
	numberOfProperties = 4;
	valuesPerProperty = 3;
	
	// var deck = new Deck(numberOfProperties,valuesPerProperty,100,true);
	// deck.show();
	
	// var cards= new Cards(numberOfProperties, valuesPerProperty);
	// setMinusOne = []
	// for (var i=0;i<valuesPerProperty - 1;i++){
		// var card = cards.getRandomCard();
		// card.show();
		// setMinusOne.push(card);
	// }
	// // console.log(setMinusOne);
	
	// missingCardPropertyValues = cards.gameSET_getCardPropertiesForMissingCard(setMinusOne);
	// var missingCard = new Card("",numberOfProperties, valuesPerProperty,false,missingCardPropertyValues);
	// missingCard.setIdFromProperties();
	// missingCard.show();
	
	var cards= new Cards(numberOfProperties, valuesPerProperty);
	setMinusOne = []
	for (var i=0;i<valuesPerProperty - 1;i++){
		
		// gameSET_getCardPropertiesThatFitProvidedCardsSoASetIsPossible();
		var card = cards.getRandomCard();
		card.show();
		setMinusOne.push(card);
	}
	// console.log(setMinusOne);
	
	missingCardPropertyValues = cards.gameSET_getCardPropertiesForMissingCard(setMinusOne);
	var missingCard = new Card("",numberOfProperties, valuesPerProperty,false,missingCardPropertyValues);
	missingCard.setIdFromProperties();
	missingCard.show();
	
});


//-----------------------------------------------------------------------------------------
//---------------------------DECK --------------------------------------------------------------
//-----------------------------------------------------------------------------------------
function Deck(properties, valuesForEachProperty,cardsPerDeck,isCardRepeatable){
	//properties = how many properties as in: colour, quantity,....
	//valuesForEachProperty = how many possible values does each property has
	//cardsPerDeck = how many cards do you want in your deck
	//isCardRepeatable = repetition of same card allowed in deck? 
	
	isCardRepeatable = typeof isCardRepeatable !== 'undefined' ? isCardRepeatable : false;
	cardsPerDeck = typeof cardsPerDeck !== 'undefined' ? cardsPerDeck : Math.pow(valuesForEachProperty, properties);
	
	//create cards
	this.allCards = new Cards(properties,valuesForEachProperty);
	
	//check requirements
	if (cardsPerDeck>this.allCards.getNumberOfCards() && !isCardRepeatable){
		console.log("ASSERT ERROR impossible number of unique cards asked.")
		// console.log(cardsPerDeck)
		// console.log(this.allCards.getNumberOfCards());
		cardsPerDeck = this.allCards.getNumberOfCards();
	}
	
	if (cardsPerDeck <=0){
		console.log("ASSERT ERROR zero or less than zero cards per deck...")
	}
	
	//init deck
	if (cardsPerDeck == this.allCards.getNumberOfCards()){
		console.log("complete pack");
		this.deck = this.allCards.getAllCards();
		this.shuffle();
	}else if (isCardRepeatable){
		this.deck = []
		for (i=0;i<cardsPerDeck;i++){
			// this.deck.push(this.allCards.getRandomCard());
			// var index = getRandomIntIncludingMinAndMax(0,this.allCards.getNumberOfCards()-1);
			// console.log(index);
			this.deck.push(this.allCards.getRandomCard());
		}
	}else {
		//if card is not repeatable max amount of cards is number of cards.
		this.deck = this.allCards.getAllCards();
		this.shuffle();
		this.deck = this.deck.slice(0,cardsPerDeck);
	}
}
	
Deck.prototype.takeOffTopCard = function(){
	return this.deck.pop();
}

Deck.prototype.getSize = function(){
	return this.deck.length;
}

Deck.prototype.shuffle = function(){
 // return generalFunctions.shuffle(this.cards);
	shuffle(this.deck);
}

Deck.prototype.show = function(){
	console.log("The deck contains " + this.getSize() + " cards: ");
	for (i=0;i<this.getSize();i++){
		this.deck[i].show();
		// console.log(this.deck[i]);
	}
}

//-----------------------------------------------------------------------------------------
//---------------------------CARDS --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function Cards(properties, valuesForEachProperty){
	
	this.cards = [];
	for (var i = 0; i<Math.pow(valuesForEachProperty, properties); i++){
		this.cards.push(new Card(i,properties,valuesForEachProperty,false));
		// console.log(i);
		for (var property = 0; property<properties;property++){
			this.cards[i].setPropertyValue(property, Math.floor((i%Math.pow(valuesForEachProperty, property+1)) / Math.pow(valuesForEachProperty, property)));
		}
		// this.cards[i].setProperty(0,Math.floor(i%valuesForEachProperty));
		// this.cards[i].setProperty(1, Math.floor((i%Math.pow(valuesForEachProperty, 2)) / Math.pow(valuesForEachProperty, 1)));
		// this.cards[i].setProperty(2, Math.floor((i%Math.pow(valuesForEachProperty, 3)) / Math.pow(valuesForEachProperty, 2)));
		// this.cards[i].setProperty(3, Math.floor((i%Math.pow(valuesForEachProperty, 4)) / Math.pow(valuesForEachProperty, 3)));
		this.cards[i].setIdFromProperties();
		// this.cards[i].show();
	}
	
	this.properties = properties;
	this.valuesForEachProperty = valuesForEachProperty;
	
	this.sumOffAllPropertyValues = 0; //calculate once for use in functions here. 
	this.allPossiblePropertyValues = []; //calculate once for use in functions here. 
	for (var i =0;i<this.valuesForEachProperty; i++){	
		this.sumOffAllPropertyValues+=i;
		this.allPossiblePropertyValues.push(i);
		// console.log("sumOffAllPropertyValues");
		// console.log(this.sumOffAllPropertyValues);
		// console.log(this.valuesForEachProperty);
	}
}

Cards.prototype.getNumberOfCards = function(){
	//the number of existing different cards.
	return this.cards.length;
}


Cards.prototype.show = function(){
	console.log("there are " + this.getNumberOfCards() + " cards:");
	for (i=0;i<this.getNumberOfCards();i++){
		this.cards[i].show();
	}
}

Cards.prototype.getAllCards = function() {
	//returns copy of the cards array. (so, by val, not by reference!!)
	return this.cards.slice();
}

Cards.prototype.getRandomCard = function(){
	return clone(this.cards[getRandomIntIncludingMinAndMax(0,this.getNumberOfCards()-1)]); //returns a copy of the element of the array (so byval, NOT by reference!!!)
	// return clone(this.cards[0]); //returns a copy of the element of the array (so byval, NOT by reference!!!)
}
Cards.prototype.getCard = function(index){
	return clone(this.cards[index]); //returns a copy of the element of the array (so byval, NOT by reference!!!)
}

Cards.prototype.gameSET_howManyCardsPerSet = function(){
	//you can't play set if you have 2 values per property and want 5 cards in a set.
	//cards per set equals amount of valuesPerProperty.
	return this.valuesForEachProperty; 
	
}

// Cards.prototype.gameSET_getCardPropertiesThatFitProvidedCardsSoASetIsPossible = function( SETBuilder ){
	// //check if cards indeed make for a set (all properties unique or equal) (for a three card game, with 3 values, this is always true.)
	// //for each property, run through both cards, check 
	
	// if (SETMinusOneCard.length !== this.gameSET_howManyCardsPerSet() -1){
		// console.log("ASSERT ERROR: there should be a set minus one card provided.");
		// console.log(SETMinusOneCard.length);
		// console.log(this.gameSET_howManyCardsPerSet() -1);
	// }
	
	// var neededPropertyValues = []; //for each property the needed value to complete a set 
	// for (var i =0;i<this.properties; i++){
		// var propertyValues = []; // for one property all values of this set minus one card.
		
		// for (var j =0;j<this.gameSET_howManyCardsPerSet()  -1; j++){	
			
			// // console.log(SETMinusOneCard[j].allValuesSame ()
			// propertyValues.push(SETMinusOneCard[j].getPropertyValue(i));
			
		// }
		// // console.log("propertyValues equal: " + propertyValues.allValuesSame ());
		// // console.log("propertyValues unique: " + propertyValues.allValuesUnique ());
		
		// if (propertyValues.allValuesSame ()){
			// neededPropertyValues.push(propertyValues[0]); //simply the same value
		// }else if (propertyValues.allValuesUnique ()){
			// //check remaining possibilities:
			// var remaining  = this.allPossiblePropertyValues.slice();
			// var uniques = propertyValues.getUniqueValues();
			
			// //check if all values are unique. if not, not good!
			// if (uniques.length != propertyValues.length){
				// console.log("ASSERT ERROR: non unique values for a property (but also not all equal!)");
			// }
			
			// //here we take the values we have out of the potential values (so all remaing values are valid values to be chosen from)
			// for (var j =0;j<propertyValues.length; j++){	
				// var index = remaining.indexOf(propertyValues[j]);
				// if (index > -1) {
					// remaining = remaining.splice(index, 1);
				// }
			// }
			
			// remaining.shuffle();
			// neededPropertyValues.push(remaining[0]);
		
		
			// // neededPropertyValues.push(this.sumOffAllPropertyValues - propertyValues.reduce(function(a, b) { return a + b; }, 0)); //the missing value is the sum of all values, - the sum of all values in this "set minus one card" if we have a 0 and a 2      0+1+2  - 0+2  = 1 so one is missing value for this property
		// }else{
			// console.log("ASSERT ERROR: illegal card!");
			// console.log("actually, not neccessarily bad code, just means that there is a bad set here. depending on start conditions: how many propertyvalues? how many cards per set? ");
			// console.log("just means: invalid set!");
			// console.log(SETMinusOneCard);
		// }
	// }
	// return neededPropertyValues;
// }

Cards.prototype.gameSET_getCardPropertiesForMissingCard = function( SETMinusOneCard ){
	//check if cards indeed make for a set (all properties unique or equal) (for a three card game, with 3 values, this is always true.)
	//for each property, run through both cards, check 
	
	if (SETMinusOneCard.length !== this.gameSET_howManyCardsPerSet() -1){
		console.log("ASSERT ERROR: there should be a set minus one card provided.");
		console.log(SETMinusOneCard.length);
		console.log(this.gameSET_howManyCardsPerSet() -1);
	}
	
	var neededPropertyValues = []; //for each property the needed value to complete a set 
	for (var i =0;i<this.properties; i++){
		var propertyValues = []; // for one property all values of this set minus one card.
		
		for (var j =0;j<this.gameSET_howManyCardsPerSet()  -1; j++){	
			
			// console.log(SETMinusOneCard[j].allValuesSame ()
			propertyValues.push(SETMinusOneCard[j].getPropertyValue(i));
			
		}
		// console.log("propertyValues equal: " + propertyValues.allValuesSame ());
		// console.log("propertyValues unique: " + propertyValues.allValuesUnique ());
		
		if (propertyValues.allValuesSame ()){
			neededPropertyValues.push(propertyValues[0]); //simply the same value
		}else if (propertyValues.allValuesUnique ()){
			neededPropertyValues.push(this.sumOffAllPropertyValues - propertyValues.reduce(function(a, b) { return a + b; }, 0)); //the missing value is the sum of all values, - the sum of all values in this "set minus one card" if we have a 0 and a 2      0+1+2  - 0+2  = 1 so one is missing value for this property
		}else{
			console.log("ASSERT ERROR: illegal card!");
			console.log("actually, not neccessarily bad code, just means that there is a bad set here. depending on start conditions: how many propertyvalues? how many cards per set? ");
			console.log("just means: invalid set!");
			console.log(SETMinusOneCard);
		}
	}
	return neededPropertyValues;
}
	


//------------------------------------------------------------------------
//------------------------CARD ------------------------------------------------
//------------------------------------------------------------------------
function Card (id , numberOfProperties, numberOfValuesForEachProperty, isPropertiesDefinedById,properties){
	isPropertiesDefinedById = typeof isPropertiesDefinedById !== 'undefined' ? isPropertiesDefinedById : true;
	id = typeof id !== 'undefined' ? id : "noName";
	properties = typeof properties !== 'undefined' ? properties : [];
	this.id = id;
	
	if (properties.length >0 ){
		//if properties provided: check lenght, and if all values are "valid"
		if (properties.length == numberOfProperties){
			for (var i = 0;i<numberOfProperties;i++){
				if (!(properties[i] >=0 && properties[i]< numberOfValuesForEachProperty)){
					console.log("ASSERT ERROR value outside range ");
					console.log(numberOfValuesForEachProperty);
					console.log(properties.slice());
					properties = [];
				}
				
			}
		}else{
			console.log("ASSERT ERROR length of properties not valid. ");
			console.log(properties.length);
			console.log(numberOfProperties);
			properties = [];
		}
		
	}
	
	this.properties = properties;
	
	for (var i = 0;i<numberOfProperties;i++){
		this.properties.push("X");
	}
}



	
Card.prototype.getNumberOfProperties = function(){
	return this.properties.length;
}

Card.prototype.getPropertyValue = function(property){
	return this.properties[property];
}

Card.prototype.setPropertyValue = function(property, value){
	//properties have just a numeric value.
	this.properties[property] = value;
}

Card.prototype.getPropertiesAsChars = function(property, value){
	//get property as letter 0 = A, 1 = B,...
	var asChars = [];
	for (var i=0;i<this.properties.length;i++){
		asChars.push(String.fromCharCode(65 + this.properties[i]));
	}
	
	return asChars;
}


Card.prototype.setIdFromProperties = function(id){
	this.id = this.getPropertiesAsChars().join("");
	this.isPropertiesDefinedById = true;
}

Card.prototype.show = function(){
	// console.log(this.id);
	if (this.isPropertiesDefinedById){
		console.log(this.id);
	}else{
		console.log(this.properties.join("-"));
	}
}