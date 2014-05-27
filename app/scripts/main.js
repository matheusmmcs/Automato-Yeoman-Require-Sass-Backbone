/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        paper: {
            deps: ["jquery"],
            exports: "Paper"
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        paper: '../bower_components/paper/dist/paper-full'
    },
    waitSeconds: 10
});

require([
    'backbone',
    'app'
], function (Backbone, App) {
    Backbone.history.start();
    new App();
});
