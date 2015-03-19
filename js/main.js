require.config({
	paths: {
		'index': 'min/index',
		'jquery': 'jquery.min',
		'jquery.ba-resize': 'min/jquery.ba-resize',
		'jquery.tabs+accordion': 'jquery.tabs+accordion',
	},
	shim: {
		'jquery.ba-resize': ['jquery'],
	},
});

require(['jquery.tabs+accordion'], function() {

	$('.accordion, .tabs')
	.TabsAccordion({
		hashWatch: true,
		pauseMedia: true,
		responsiveSwitch: 'tablist',
		//saveState: sessionStorage,
	});
});
