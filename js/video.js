var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById('player1');
	video.autoplay = false;
	console.log("Autoplay is set to false");
	video.loop = false;
	console.log("Loop is set to false");

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		video.playbackRate = 1.0;
		document.querySelector("#volume").textContent = video.volume*100 + "%";
	});

	document.querySelector('#pause').addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow down Video");
		video.playbackRate -= 0.1;
		console.log("Speed is",video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Speed up Video");
		video.playbackRate += 0.1;
		console.log("Speed is",video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
		}
		else {
			video.currentTime += 10;
		}
		console.log("Video current time is",video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = !video.muted
		if (video.muted == 0) {
			console.log("Unmute");
			// video.volume = 1;
			this.textContent = "Mute";
		}
		else {
			console.log("Mute")
			// video.volume = 0;
			this.textContent = "Unmute";
		}
	});

	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value/100;
		document.querySelector("#volume").textContent = this.value + "%";
		console.log("The current value is", this.value/100);
		console.log(this.value+"%");
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});
