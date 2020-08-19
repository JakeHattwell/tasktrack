window.onload = () => {
	'use strict';
  
	if ("serviceWorker" in navigator) {
		if (navigator.serviceWorker.controller) {
		  console.log(
			"[PWA] Service Worker already found, skipping register"
		  );
		} else {
		  // Register the service worker
		  navigator.serviceWorker
			.register("/sw.js", {
			  scope: "./",
			})
			.then(function (reg) {
			  console.log(
				"[PWA] Service worker has been registered for scope: " +
				  reg.scope
			  );
			});
		}
	  }
  }