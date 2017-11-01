$( document ).ready(function() {
    
    //Randomly arrange quotes
	var quotes = $('blockquote');
	for(var i = 0; i < quotes.length; i++){
    var target1 = Math.floor(Math.random() * quotes.length -1) + 1;
    var target2 = Math.floor(Math.random() * quotes.length -1) +1;
    quotes.eq(target1).before(quotes.eq(target2));
	}
});


