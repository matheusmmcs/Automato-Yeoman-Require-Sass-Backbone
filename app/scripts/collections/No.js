/*global define*/

define([
    'underscore',
    'backbone',
    'models/No'
], function (_, Backbone, NoModel) {
    'use strict';

    var NoCollection = Backbone.Collection.extend({
        model: NoModel
    });

    return NoCollection;
});
