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
function ready() {
			setInterval(-1);
			setTimeout(-1);
}
function reload_system() {
			let reloading = document.createElement('img');
			reloading.className = 'animate__animated animate__fadeInDownBig';
			reloading.src='ReloadingImg0.png';
			document.body.append(reloading);
			setTimeout(() => { 
				window.history.go(); }, 5000);
}
function shutdown_system() {
			let reloading = document.createElement('img');
			reloading.className = 'animate__animated animate__backInDown';
			reloading.src='ShutdowningImg0.png';
			document.body.append(reloading);
			setTimeout(() => { 
				window.history.go(-1); }, 5000);
}
function pl() {
			let pl = document.createElement('img');
			pl.className = 'animate__animated animate__jackInTheBox';
			pl.src='CreatedImg0.png';
			document.body.append(pl);
}
function bsod() {
	bsod_confirm = prompt("Stop stop stop. Are you sure you want to receive BsOD? You will need to wait 20 seconds.");
	if (bsod_confirm=="yes") {
		play_error_sound();
		setTimeout(() => { 
			window.location.href = "bsod.html"; }, 1500);
	}
	else {
		console.log("Ok");
	}
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
function run_calc() {
	let calc = document.createElement('iframe');
	calc.className = 'animate__animated animate__jello';
	calc.src='calculator/index.html';
	calc.height='530' 
	calc.width='700'
	document.body.append(calc);
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
function run_documentation() {
	let calc = document.createElement('iframe');
	calc.className = 'animate__animated animate__jello';
	calc.src='documentation/index.html';
	calc.height='530' 
	calc.width='700'
	document.body.append(calc);
}
ready();