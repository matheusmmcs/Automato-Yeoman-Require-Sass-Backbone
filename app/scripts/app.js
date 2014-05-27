define([
	'backbone',
	'paper',
	'jquery'
], function(Backbone, Paper, $){
    var App = Backbone.View.extend({
        initialize: function(){
        	console.log(Paper);
        	Paper.view = $("#canvas");
            var shape = new Paper.Shape.Circle(new Paper.Point(80, 50), 30);
			shape.strokeColor = 'black';
        }
    });
    return App;
});