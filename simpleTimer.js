//http://www.dailycoding.com/posts/object_oriented_programming_with_javascript__timer_class.aspx
// Declaring class "Timer"
var SimpleTimer = function(interval, buttonElement)
{        
	
    // Property: Frequency of elapse event of the timer in millisecond
    this.interval = interval;
    this.buttonElement = buttonElement;
	this.millis = 0;
	this.secondsDiv;
	this.minutesDiv;
	this.millisDiv;
	
	//var el = document.getElementById('el-id'),
	
	
    // Property: Whether the timer is enable or not
    this.Enable = new Boolean(false);
    
    // Event: Timer tick
    this.Tick;
    
    // Member variable: Hold interval id of the timer
    var timerId = 0;
    
    // Member variable: Hold instance of this class
    var thisObject;
    thisObject = this;
	
	// this.buttonElement.addEventListener('click', function(){
		// thisObject.Start.bind(thisObject)(); 
	// });
	
	// this.ButtonSetToStart();
	
    // Function: Start the timer
    this.Start = function()
    {
		this.secondsDiv.innerHTML = 0;
		this.millis = 0;
		this.Enable = new Boolean(true);

        thisObject = this;
        if (thisObject.Enable)
        {
            thisObject.timerId = setInterval(
            function()
            {
				thisObject.Tick(); 
            }, thisObject.interval);
        }
		
	
		
		
		this.ButtonSetToStop(); // stops the timer.
		//this.ButtonSetToStart(); //immediate restart
		
		
		
    };
    
	this.Tick = function (){
		console.log("looooodpoe");
		this.millis += this.interval;
		this.secondsDiv.innerHTML = this.millis;
	}
	
    // Function: Stops the timer
    this.Stop = function()
    {            
		thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
		this.ButtonSetToStart();
    };
	
	this.ButtonSetToStop = function (){
			
		var elClone =  this.buttonElement.cloneNode(true);
		this.buttonElement.parentNode.replaceChild(elClone,  this.buttonElement);
		this.buttonElement = elClone;
		
		this.buttonElement.addEventListener('click', function(){
			thisObject.Stop.bind(thisObject)();
			
		});
		this.buttonElement.value = "Reset";
	}
	
	this.ButtonSetToStart = function (){
			
		var elClone =  this.buttonElement.cloneNode(true);
		this.buttonElement.parentNode.replaceChild(elClone,  this.buttonElement);
		this.buttonElement = elClone;
		
		this.buttonElement.addEventListener('click', function(){
			thisObject.Start.bind(thisObject)();
		})
		this.buttonElement.value = "Start Chrono";
	}
	// this.SetSecondsDiv= function(){
		
	// }
};