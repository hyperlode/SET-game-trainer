docReady(function() { 
	console.log ("yeee");
	// var allCards = new Cards(4,3);
	var allCards = new Cards(3,2);
	allCards.shuffle();
	allCards.show();
	allCards.takeOffTopCard();
	console.log("--------------");
	allCards.show();
	
	
});
//-----------------------------------------------------------------------------------------
//---------------------------CARDS --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function Cards(properties, valuesForEachProperty){
	
	this.cards = [];
	for (var i = 0; i<Math.pow(valuesForEachProperty, properties); i++){
		this.cards.push(new Card(i,properties,false));
		// console.log(i);
		for (var property = 0; property<properties;property++){
			this.cards[i].setProperty(property, Math.floor((i%Math.pow(valuesForEachProperty, property+1)) / Math.pow(valuesForEachProperty, property)));
		}
		// this.cards[i].setProperty(0,Math.floor(i%valuesForEachProperty));
		// this.cards[i].setProperty(1, Math.floor((i%Math.pow(valuesForEachProperty, 2)) / Math.pow(valuesForEachProperty, 1)));
		// this.cards[i].setProperty(2, Math.floor((i%Math.pow(valuesForEachProperty, 3)) / Math.pow(valuesForEachProperty, 2)));
		// this.cards[i].setProperty(3, Math.floor((i%Math.pow(valuesForEachProperty, 4)) / Math.pow(valuesForEachProperty, 3)));
		this.cards[i].setIdFromProperties();
		// this.cards[i].show();
		
	}
	
}

Cards.prototype.show = function(){
	console.log("there are " + this.cards.length+ " cards:");
	for (i=0;i<this.cards.length;i++){
		this.cards[i].show();
	}
}

Cards.prototype.shuffle = function(){
	// return generalFunctions.shuffle(this.cards);
	
	shuffle(this.cards);
}

Cards.prototype.takeOffTopCard = function(){
	return this.cards.pop();
}
//------------------------------------------------------------------------
//------------------------CARD ------------------------------------------------
//------------------------------------------------------------------------
function Card (id , numberOfProperties, isPropertiesDefinedById){
	isPropertiesDefinedById = typeof isPropertiesDefinedById !== 'undefined' ? isPropertiesDefinedById : true;
	this.id = id;
	this.properties = [];
	
	for (var i = 0;i<numberOfProperties;i++){
		this.properties.push("X");
	}
}
	
Card.prototype.getNumberOfProperties = function(){
	return this.properties.length;
}

Card.prototype.setProperty = function(property, value){
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