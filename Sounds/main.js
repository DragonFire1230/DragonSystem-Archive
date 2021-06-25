function crazy_error() {
			let crazy = document.createElement('img');
			crazy.className = 'animate__animated animate__zoomInDown';
			crazy.src='CrazyMsg0.png'
			setTimeout(() => { 
				document.body.append(crazy);
				crazy_error(); }, 50);
}
function nokia3310remix() {
			let nokiaremix = document.createElement('audio');
			nokiaremix.src='Sounds/nokia3310remix.mp3';
			nokiaremix.play();
}
function play_startup_sound() {
	let crazyerror = document.createElement('audio');
	crazyerror.src='Sounds/Startup.mp3';
	crazyerror.play();
}
function play_error_sound() {
	let crazyerror = document.createElement('audio');
	crazyerror.src='Sounds/Error.mp3';
	crazyerror.play();
}
function play_loading_sound() {
	let crazyerror = document.createElement('audio');
	crazyerror.src='Sounds/LoadingSound.mp3';
	crazyerror.play();
}
function sounds_folder() {
	let sounds_folder = document.createElement('iframe');
	sounds_folder.className = 'animate__animated animate__jello';
	sounds_folder.src='Sounds/index.html';
	sounds_folder.height='530' 
	sounds_folder.width='700'
	document.body.append(sounds_folder);
}
function run_crazyerrorsound() {
	let crazyerror = document.createElement('audio');
	crazyerror.src='Sounds/CrazyErrorWin93Sound.mp3';
	crazyerror.play();
}
