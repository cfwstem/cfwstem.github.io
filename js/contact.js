if (document.forms[0] && window.FormData) {

	var message = new Object();
	message.loading = 'Loading...';
	message.success = 'Thank you. Application received!';
	message.failure = 'Whoops! There was a problem sending your message.';

	var form = document.forms[0];

	var statusMessage = document.createElement('div');
	statusMessage.className = 'status';

	// Set up the AJAX request
	var request = new XMLHttpRequest();
	//request.open('POST', '//formspree.io/apawlows@vols.utk.edu', true);
	//request.open('POST', '//flipmail.co/api/MIWYmSBHTdxfi2JE1EPf', true);
	request.open('POST', '//docs.google.com/forms/d/1EglVj2GAmKEIdY8wXtyEcye4Q_roDDDHYcyt5WS9bJo/formResponse', true);
	request.setRequestHeader('accept', 'application/json');

	// Listen for the form being submitted
	form.addEventListener('submit', function(evt) {
	    evt.preventDefault();
	    form.appendChild(statusMessage);

	    // Create a new FormData object passing in the form's key value pairs (that was easy!)
	    var formData = new FormData(form);

	    // Send the formData
	    request.send(formData);

	    // Watch for changes to request.readyState and update the statusMessage accordingly
	    request.onreadystatechange = function () {
	        // <4 =  waiting on response from server
	        if (request.readyState < 4)
	            statusMessage.innerHTML = message.loading;
	        // 4 = Response from server has been completely loaded.
	        else if (request.readyState === 4) {
	            // 200 - 299 = successful
	            if (request.status == 200 && request.status < 300)
	                statusMessage.innerHTML = message.success;
	            else
	                form.insertAdjacentHTML('beforeend', message.failure);
	        }
	    }
	});

}