function dsapi_open_url(url) {
	window.open(url);
}

function dsapi_open_window(url, height, width) {
	let newwindow = document.createElement('iframe');
	newwindow.className = 'animate__animated animate__jello';
	newwindow.src=url;
	newwindow.height=height
	newwindow.width=width
	document.body.append(newwindow);
}