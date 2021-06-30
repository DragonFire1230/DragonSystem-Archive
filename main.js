function crazy_error() {
			let crazy = document.createElement('img');
			crazy.className = 'animate__animated animate__flipInY';
			crazy.src='Images/CrazyMsg0.png'
			setTimeout(() => { 
				document.body.append(crazy);
				crazy_error(); }, 30);
}
function nokia3310remix() {
			let nokiaremix = document.createElement('audio');
			nokiaremix.src='Sounds/Sounds/nokia3310remix.mp3';
			nokiaremix.play();
}
function bferrors() {
	setInterval(-1);
	setTimeout(-1);
        Notification.requestPermission();
        showNotification({
            top: 10,
            right: 10,
            html: "Errors have been corrected",
            className: "bferrors"
});
}
function reload_system() {
			let reloading = document.createElement('img');
			reloading.className = 'animate__animated animate__fadeInDownBig';
			reloading.src='Images/ReloadingImg0.png';
			document.body.append(reloading);
			setTimeout(() => { 
				window.history.go(); }, 5000);
}
function shutdown_system() {
	let reloading = document.createElement('img');
	reloading.className = 'animate__animated animate__backInDown';
	reloading.src='Images/ShutdowningImg0.png';
	document.body.append(reloading);
	setTimeout(() => { 
		window.history.go(-1); }, 5000);
}
function pl() {
	let pl = document.createElement('img');
	pl.className = 'animate__animated animate__jackInTheBox';
	pl.src='Images/CreatedImg0.png';
	document.body.append(pl);
}
function bsod() {
	bsod_confirm = prompt("Stop stop stop. Are you sure you want to receive BsOD? You will need to wait 20 seconds.");
	if (bsod_confirm=="yes") {
		var objall = document.getElementById('*');
		objall.parentNode.removeChild(objall);

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
	crazyerror.src='Sounds/Sounds/Startup.mp3';
	crazyerror.play();
}
function play_error_sound() {
	let crazyerror = document.createElement('audio');
	crazyerror.src='Sounds/Sounds/Error.mp3';
	crazyerror.play();
}
function play_loading_sound() {
	let crazyerror = document.createElement('audio');
	crazyerror.src='Sounds/Sounds/LoadingSound.mp3';
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
	crazyerror.src='Sounds/Sounds/CrazyErrorWin93Sound.mp3';
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
function discord_server() {
	discord_confirm = prompt("Do you really want to visit my discord server?");
	if (discord_confirm=="yes") {
		discord_confirm2 = prompt("Really?");
		if (discord_confirm2=="yes") {
			discord_confirm3 = prompt("REALLY?");
			if (discord_confirm3=="yes") {
				window.location.href = 'https://discord.gg/3mH4SUDYwE';
			}
		}
	}
}
function github() {
	window.location.href = "https://github.com/DragonWolf123/DragonSystem";
}
