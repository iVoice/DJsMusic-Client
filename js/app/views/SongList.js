define(function (require) {

    "use strict";

    var $                       = require('jquery'),
        _                       = require('underscore'),
        Backbone                = require('backbone'),
        SongListItemView    	= require('app/views/SongListItem');

    return Backbone.View.extend({
    	
    	tagName: 'tbody',

        initialize: function () {
        	console.log("SongList: Init");
        	this.collection.on("reset", this.render, this);
            this.collection.on("add", this.render, this);
        },

        render: function () {
        	this.$el.empty();
		    _.each(this.collection.models, function (song) {
            	this.$el.append(new SongListItemView({model: song}).render().el);
            }, this);
            
            return this;
        }
    });

});

