define(function (require) {

    "use strict";

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        tpl         = require('text!tpl/Profile.html'),
        App			= require('app/app'),

        template = _.template(tpl);

    return Backbone.View.extend({
    	
    	render: function () {
            this.$el.html(template());
            return this;
        }

    });

});