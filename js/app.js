/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();

	// initialize timer clock
    startTime();

    var randomized = Math.round(19000 + (Math.random() * 899));

    $('body').css('backgroundImage', 'url(https://kbdevstorage1.blob.core.windows.net/asset-blobs/' + randomized + '_en_1)');
});
