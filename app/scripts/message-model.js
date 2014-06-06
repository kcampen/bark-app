var Message = Parse.Object.extend('Message');

var MessageCollection = Parse.Collection.extend({
	model: Message

	initialize: function(){
		this.on('add', function(message){
			new ListView({model: message});
		});
	}
	
});