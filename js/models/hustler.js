/**
 * Created by Oskar on 22.02.2017.
 */
define([
    'backbone'
], function (Backbone) {

    var HustlerModel = Backbone.Model.extend({
        defaults: {
            name: ''
        }
    });

    return new HustlerModel;
});
