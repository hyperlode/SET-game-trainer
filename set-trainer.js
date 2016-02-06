docReady(function() { 
	
	// var allCards = new Cards(4,3);
	 
	numberOfProperties = 4; //i.e. shape, quantity, color, infill
	valuesPerProperty = 5; // i.e 3 (for the color: red, green and blue,   for the infill: solid, stripes, blank   ,.....
	testCard = new Card ("ABCD" , numberOfProperties, valuesPerProperty, true);
	testCard.setPropertiesFromId();
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
	
	
	//get perfect set.

	// var completeCards= new Cards(numberOfProperties, valuesPerProperty);
	// setBuilder = []
	// setBuilder.push(cards.getRandomCard());
	// setBuilder.push(cards.getRandomCard());
	
	// var cardsToChooseFromProperties = cards.gameSET_getPropertiesOfMatchingCardsForAGivenAmountOfCards(setBuilder);
	// var fittingCards = new Cards(numberOfProperties, valuesPerProperty,cardsToChooseFromProperties);
	// setBuilder.push(fittingCards.getRandomCard());
	
	// console.log(setBuilder);
	// for (var i=0;i<3;i++){
		// setBuilder[i].show();
	// }
	
	var completeCards= new Cards(numberOfProperties, valuesPerProperty);
	var setBuilder = []
	setBuilder.push(completeCards.getRandomCard());
	// setBuilder.push(completeCards.getRandomCard());
	// setBuilder.push(completeCards.getRandomCard());
	
	var cardsToChooseFromProperties = completeCards.gameSET_getPropertiesOfMatchingCardsForAGivenAmountOfCards(setBuilder);
	// console.log(cardsToChooseFromProperties);
	var fittingCards = new Cards(numberOfProperties, valuesPerProperty,cardsToChooseFromProperties);
	var allFittingCards = fittingCards.getAllCards();
	
	// for (var i=0;i<3;i++){
	while(fittingCards.getNumberOfCards() >0){
		// gameSET_getCardPropertiesThatFitProvidedCardsSoASetIsPossible();
		console.log("---adding a card:----");
		var pickedCard = fittingCards.getRandomCard();
		pickedCard.show();
		setBuilder.push (pickedCard);
		// setBuilder.push (allFittingCards[0]);
		// console.log(allFittingCards.length);
		// allFittingCards[0].show();
		
		
		// console.log(fittingCards.getNumberOfCards());
		
		cardsToChooseFromProperties = completeCards.gameSET_getPropertiesOfMatchingCardsForAGivenAmountOfCards(setBuilder);
		
		fittingCards = new Cards(numberOfProperties, valuesPerProperty,cardsToChooseFromProperties);
		allFittingCards = fittingCards.getAllCards();
		// console.log(cardsToChooseFromProperties);
		// console.log(setBuilder);
		
		// for (var j=0;j<setBuilder.length;j++){
			// setBuilder[j].show();
		// }
		// fittingCards.show();
	}
	
	for (var i=0;i<setBuilder.length;i++){
		setBuilder[i].show();
	}
	console.log("fitting cards for set:");
	// for (var i=0;i<allFittingCards.length;i++){
		// allFittingCards[i].show();
	// }
	// console.log(setMinusOne);
	
	// missingCardPropertyValues = cards.gameSET_getPropertiesOfMatchingCardsForAGivenAmountOfCards(setBuilder);
	// fittingCards = new Cards (numberOfProperties, valuesPerProperty, missingCardPropertyValues);
	// console.log(fittingCards.show());
	// // var missingCard = new Card("",numberOfProperties, valuesPerProperty,false,missingCardPropertyValues);
	// missingCard.setIdFromProperties();
	// missingCard.show();
	
});

function showFullSet(){
	numberOfProperties = 4; //i.e. shape, quantity, color, infill
	valuesPerProperty = 5; // i.e 3 (for the color: red, green and blue,   for the infill: solid, stripes, blank   ,.....
	var completeCards= new Cards(numberOfProperties, valuesPerProperty);
	var setBuilder = []
	setBuilder.push(completeCards.getRandomCard());
	var cardsToChooseFromProperties = completeCards.gameSET_getPropertiesOfMatchingCardsForAGivenAmountOfCards(setBuilder);
	var fittingCards = new Cards(numberOfProperties, valuesPerProperty,cardsToChooseFromProperties);
	var allFittingCards = fittingCards.getAllCards();
	
	while(fittingCards.getNumberOfCards() >0){
		console.log("---adding a card:----");
		var pickedCard = fittingCards.getRandomCard();
		pickedCard.show();
		setBuilder.push (pickedCard);
		cardsToChooseFromProperties = completeCards.gameSET_getPropertiesOfMatchingCardsForAGivenAmountOfCards(setBuilder);
		
		fittingCards = new Cards(numberOfProperties, valuesPerProperty,cardsToChooseFromProperties);
		allFittingCards = fittingCards.getAllCards();
		
	}
	
	for (var i=0;i<setBuilder.length;i++){
		setBuilder[i].show();
	}
	
}


function showAGenuineSetSet(){
	//get perfect set.
	numberOfProperties = 4; //i.e. shape, quantity, color, infill
	valuesPerProperty = 3; // i.e 3 (for the color: red, green and blue,   for the infill: solid, stripes, blank   ,.....
	var cards= new Cards(numberOfProperties, valuesPerProperty);
	setBuilder = []
	setBuilder.push(cards.getRandomCard());
	setBuilder.push(cards.getRandomCard());
	
	var cardsToChooseFromProperties = cards.gameSET_getPropertiesOfMatchingCardsForAGivenAmountOfCards(setBuilder);
	var fittingCards = new Cards(numberOfProperties, valuesPerProperty,cardsToChooseFromProperties);
	setBuilder.push(fittingCards.getRandomCard());
	
	console.log(setBuilder);
	for (var i=0;i<3;i++){
		setBuilder[i].show();
	}
	
}

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

function Cards(numberOfProperties, valuesForEachProperty, propertiesValues){
	propertiesValues = typeof propertiesValues !== 'undefined' ? propertiesValues : []; //this is an array: index is property, per element a list (or single element) with possible values.
	this.cards = [];
	
	
	if (propertiesValues.length>0){
		//SPECIAL CASE specific propertise provided in lists.
		console.log("special case");
		if (numberOfProperties !== propertiesValues.length){
			console.log("ASSERT ERROR provide properties in list, have a length that doesnt match the number of Properties indicated.");
			console.log(propertiesValues);
		}
		
		//create cards
		var numberOfCards = 0
		for(var i = 0; i<numberOfProperties; i++){
			if (numberOfCards == 0){
				numberOfCards = propertiesValues[i].length;   
			}else{
				numberOfCards *= propertiesValues[i].length;   
			}
		}
		
		for(var i = 0; i<numberOfCards; i++){
			this.cards.push(new Card(i,numberOfProperties,valuesForEachProperty,false));
		}
		// console.log(this.cards);
		// console.log(propertiesValues);
		var afterHowManyCardsRepeatCycleDelayer = 0;
		for (var property = 0; property<numberOfProperties;property++){
			for(var i = 0; i<this.cards.length; i++){
				propertyIndex = Math.floor((i%Math.pow(propertiesValues[property].length, property - afterHowManyCardsRepeatCycleDelayer + 1)) / Math.pow(propertiesValues[property].length, property - afterHowManyCardsRepeatCycleDelayer));
				this.cards[i].setPropertyValue(property, propertiesValues[property][propertyIndex]);
			}
			 
			 if ((propertiesValues[property].length) == 1){
				afterHowManyCardsRepeatCycleDelayer += 1 ;
			}
		}
		// console.log(this.cards.length);
		// console.log(this.cards);
	}else{	
		//NORMAL CASE
		console.log("normal case");
		for (var i = 0; i<Math.pow(valuesForEachProperty, numberOfProperties); i++){
			//add new card. total number of possible cards = valuesPerProperty^numberOfProperties
			this.cards.push(new Card(i,numberOfProperties,valuesForEachProperty,false));
			// console.log(i);
			for (var property = 0; property<numberOfProperties;property++){
				//for every card, fill in all its properties with proper values, so all cards are unique.
				//i.e. 3 properties, 4 values per property:   0,0,0,0   1,0,0,0    2,0,0,0   0,1,0,0   1,1,0,0 ...
				this.cards[i].setPropertyValue(property, Math.floor((i%Math.pow(valuesForEachProperty, property+1)) / Math.pow(valuesForEachProperty, property)));
			}
			// this.cards[i].setProperty(0,Math.floor(i%valuesForEachProperty));
			// this.cards[i].setProperty(1, Math.floor((i%Math.pow(valuesForEachProperty, 2)) / Math.pow(valuesForEachProperty, 1)));
			// this.cards[i].setProperty(2, Math.floor((i%Math.pow(valuesForEachProperty, 3)) / Math.pow(valuesForEachProperty, 2)));
			// this.cards[i].setProperty(3, Math.floor((i%Math.pow(valuesForEachProperty, 4)) / Math.pow(valuesForEachProperty, 3)));
			
		}
	}
	
	//set the id from its properties for each card
	for(var i = 0; i<this.cards.length; i++){
		this.cards[i].setIdFromProperties();
	}
	
	//check if we have a normal set or not...
	this.allCombinationsAvailable = true; // normal case, we will build all combinations 
	if (Math.pow(valuesForEachProperty, numberOfProperties) != this.cards.length){
		this.allCombinationsAvailable = false;
	}
	console.log("all possible combinations present: " +this.allCombinationsAvailable);
	
	this.numberOfProperties = numberOfProperties;
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

Cards.prototype.gameSET_getPropertiesOfMatchingCardsForAGivenAmountOfCards = function( SETBuilder ){
	//check if cards indeed make for a set (all properties unique or equal) (for a three card game, with 3 values, this is always true.)
	//for each property, run through both cards, check 
	
	// if (SETMinusOneCard.length > this.gameSET_howManyCardsPerSet() -1){
		// console.log("ASSERT ERROR: it will be hard to find matching cards (only if all cards are equal it will work....");
		// console.log(SETMinusOneCard.length);
		// console.log(this.gameSET_howManyCardsPerSet() -1);
	// }
	
	possibleCardPropertyValues = []; //store all cards
	
	var neededPropertyValues = []; //for each property valid value(s) for the given cards to create a set
	for (var i =0;i<this.numberOfProperties; i++){
		
		//get properties from given cards
		var propertyValues = []; // for one property all values of this set minus one card.
		for (var j =0;j<SETBuilder.length ; j++){	
			// console.log(SETMinusOneCard[j].allValuesSame ()
			propertyValues.push(SETBuilder[j].getPropertyValue(i));
		}
		
		//analyse properties of given cards 
		if (SETBuilder.length == 1){
			//if there is only one card, all cards are allowed... (even the same card!)
			neededPropertyValues.push(this.allPossiblePropertyValues.slice());
		}else if (propertyValues.allValuesSame() ){
			
			// console.log("all values the same");
			neededPropertyValues.push([propertyValues[0]]); //simply the same value
		}else if (propertyValues.allValuesUnique ()){
			// console.log("all values unique");
			//check remaining possibilities:
			var remaining  = this.allPossiblePropertyValues.slice();
			var uniques = propertyValues.getUniqueValues();
			//check if all values are unique. if not, not good!
			if (uniques.length != propertyValues.length){
				console.log("ASSERT ERROR: non unique values for a property (but also not all equal!)");
			}
			
			//here we take the values we have out of the potential values (so all remaing values are valid values to be chosen from)
			for (var j =0;j<propertyValues.length; j++){	
				remaining.remove(propertyValues[j]);
				// var index = remaining.indexOf(propertyValues[j]);
				// if (index > -1) {
					// remaining = remaining.splice(index, 1);
				// }
				// this.cards[i].setPropertyValue(property, Math.floor((i%Math.pow(valuesForEachProperty, property+1)) / Math.pow(valuesForEachProperty, property)));
			}
			
			// shuffle(remaining);
			// neededPropertyValues.push(remaining[0]);
			// console.log("remaining:");
			// console.log(remaining);
			neededPropertyValues.push(remaining);
			// neededPropertyValues.push(this.sumOffAllPropertyValues - propertyValues.reduce(function(a, b) { return a + b; }, 0)); //the missing value is the sum of all values, - the sum of all values in this "set minus one card" if we have a 0 and a 2      0+1+2  - 0+2  = 1 so one is missing value for this property
		}else{
			console.log("ASSERT ERROR: illegal set!");
			// console.log("actually, not neccessarily bad code, just means that there is a bad set here. depending on start conditions: how many propertyvalues? how many cards per set? ");
			// console.log("just means: invalid set!");
			// console.log(SETMinusOneCard);
		}
	}
	
	//we now have a list from all the propertyvalues, we can build a list of possible cards from it.
	
	return neededPropertyValues;
}

// Cards.prototype.gameSET_getCardPropertiesForMissingCard = function( SETMinusOneCard ){
	// //check if cards indeed make for a set (all properties unique or equal) (for a three card game, with 3 values, this is always true.)
	// //for each property, run through both cards, check 
	
	// if (SETMinusOneCard.length !== this.gameSET_howManyCardsPerSet() -1){
		// console.log("ASSERT ERROR: there should be a set minus one card provided.");
		// console.log(SETMinusOneCard.length);
		// console.log(this.gameSET_howManyCardsPerSet() -1);
	// }
	
	// var neededPropertyValues = []; //for each property the needed value to complete a set 
	// for (var i =0;i<this.numberOfProperties; i++){
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
			// neededPropertyValues.push(this.sumOffAllPropertyValues - propertyValues.reduce(function(a, b) { return a + b; }, 0)); //the missing value is the sum of all values, - the sum of all values in this "set minus one card" if we have a 0 and a 2      0+1+2  - 0+2  = 1 so one is missing value for this property
		// }else{
			// console.log("ASSERT ERROR: illegal card!");
			// console.log("actually, not neccessarily bad code, just means that there is a bad set here. depending on start conditions: how many propertyvalues? how many cards per set? ");
			// console.log("just means: invalid set!");
			// console.log(SETMinusOneCard);
		// }
	// }
	// return neededPropertyValues;
// }
	


//------------------------------------------------------------------------
//------------------------CARD ------------------------------------------------
//------------------------------------------------------------------------
function Card (id , numberOfProperties, numberOfValuesForEachProperty, isPropertiesDefinedById,properties){
	isPropertiesDefinedById = typeof isPropertiesDefinedById !== 'undefined' ? isPropertiesDefinedById : false;
	id = typeof id !== 'undefined' ? id : "noName";
	properties = typeof properties !== 'undefined' ? properties : [];
	this.id = id;
	this.properties = properties;
	if (properties.length >0 ){
		//if properties provided: check lenght, and if all values are "valid"
		if (properties.length == numberOfProperties){
			for (var i = 0;i<numberOfProperties;i++){
				if (!(properties[i] >=0 && properties[i]< numberOfValuesForEachProperty)){
					console.log("ASSERT ERROR value outside range ");
					console.log(numberOfValuesForEachProperty);
					console.log(properties.slice());
					this.properties[i] = properties[i];
				}
				
			}
		}else{
			console.log("ASSERT ERROR length of properties not valid. ");
			console.log(properties.length);
			console.log(numberOfProperties);
			for (var i = 0;i<numberOfProperties;i++){
				this.properties.push("X");
			}
		}
		
	}else if (isPropertiesDefinedById ){
		this.setPropertiesFromId()
	}else{
		for (var i = 0;i<numberOfProperties;i++){
			this.properties.push("X");
		}
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
Card.prototype.setPropertiesFromId = function (){
	if (this.id.length !== this.properties.length){
		console.log("ASSERT ERROR: ID should be a string of chars of the same length as there are properties. (and chars to choose from should be no more than possible propertievalues. A=0, B=2,....)");
	}
	for (i=0;i<this.properties.length;i++){
		// this.id.charAt(i);
		this.properties[i] = this.id.charCodeAt(i) - 65 ; //ascii A=65
	}
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