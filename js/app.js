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

    CoinWidgetCom.go({
        wallet_address: '1AYLrvxxtUANbfPH9vxmtY5xvNZoMbgoyX',
        currency: 'bitcoin',
        counter: 'hide',
        lbl_button: 'Support me with 1 click',
        lbl_count: 'donations',
        lbl_amount: 'BTC',
        lbl_address: 'Use address below to donate. Thanks!',
        qrcode: true,
        alignment: 'bl',
        decimals: 8,
        size: "small",
        color: "light",
        countdownFrom: "0.04",
        element: "#coinwidget-bitcoin-1AYLrvxxtUANbfPH9vxmtY5xvNZoMbgoyX",
        onShow: function(){},
        onHide: function(){}
    });
});
