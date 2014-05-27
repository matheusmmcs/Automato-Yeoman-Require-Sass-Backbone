/*global define*/

define([
    'underscore',
    'backbone',
    'models/Aresta'
], function (_, Backbone, ArestaModel) {
    'use strict';

    var ArestaCollection = Backbone.Collection.extend({
        model: ArestaModel
    });

    return ArestaCollection;
});
