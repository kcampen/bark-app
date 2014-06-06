var ListView = Parse.View.extend({

	var postTemplate = _.template($('.tweet-template').text()),

	initialize: function(){
		$('.stream').prepend(this.el);
		// $('.stream').prepend(postTemplate(tweet));

		this.render();

		this.on('add', this.collection, this.render);
	},

	render: function(){
		var renderedTemplate = this.template({model: this.model});

	}


});