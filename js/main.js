window.onload = () => {
	'use strict';
	
	if ('serviceWorker' in navigator){
		navigator.serviceWorker.register('./sw.js').then(function(reg) {
			reg.onupdatefound = function() {
				

				var newSW = reg.installing;
				newSW.onstatechange = function() {

					if (newSW.state === 'installed') {
						// This assumes there's a button with id='skip-waiting-button' that
						// users should click to get the new SW to activate immediately.
						var button = document.querySelector('#skip-waiting-button');
						button.addEventListener('click', function() {
							newSW.postMessage('skipWaiting');
							button.style.display='none';

						});
						window.addEventListener('beforeunload', (event) => {
							newSW.postMessage('skipWaiting');

						});
						// Assume that 'display' is 'none' initially.
						button.style.display = 'inline';
					}
					if (newSW.state ==='activated'){
						var button = document.querySelector('#skip-waiting-button');
						button.style.display='none';
					}
					// Handle whatever other SW states you care about, like 'active'.
				};
			};

		})
	}
}