const body = document.querySelector("body");

let sceneCounter = 1;
let scene = `scene${sceneCounter}`;
let div = document.querySelectorAll('body > div');
let sceneTotal = div.length;
// console.log("total images:", div.length);

const qr1_5 = document.querySelector('#qr1-5');
const qr1_9 = document.querySelector('#qr1-9');
const qr2_9 = document.querySelector('#qr2-9');
const qr1_13 = document.querySelector('#qr1-13');
const qr2_13 = document.querySelector('#qr2-13');
const qr3 = document.querySelector('#qr3');
const qrs = [qr1_5, qr1_9, qr1_13, qr2_9, qr2_13, qr3];

for (let i = 0; i < div.length; i++) {
    div[i].classList.add('transition');
}

for (let i = 0; i < qrs.length; i++) {
    qrs[i].classList.add('transition');
}

checkScene();

function enableClick() {
	body.addEventListener('click', changeScene);
}

function disableClick() {
	body.removeEventListener('click', changeScene);
}

enableClick();

function checkScene() {
    if (sceneCounter == 1) {
        for (let i = 1; i < div.length; i++) {
            div[i].classList.add('hidden');
            div[i].classList.add('no-opacity');
        }
        for (let i = 0; i < qrs.length; i++) {
            qrs[i].classList.add('hidden');
            qrs[i].classList.add('no-opacity');
        }
    }
}

function changeScene() {
    sceneCounter++;
    scene = `scene${sceneCounter}`;
    
		//comment out to test framework without games
		disableClick();
		
    for (let i = 0; i < div.length; i++) {
        if (div[i].id != scene) {
            // addClass(div[i]);
            div[i].classList.add('no-opacity');
            setTimeout(() => {
                div[i].classList.add('hidden');
            }, 2000);
        } else {
            removeClass(div[i]);
            div[i].classList.remove('hidden');
            setTimeout(() => {
                div[i].classList.remove('no-opacity');
            }, 0);
        }
    }
		
		//comment out to test framework without games
		if (scene != 'scene4' && scene != 'scene8' && scene != 'scene12') {
    		setTimeout(() => { enableClick(); }, 2000);
		}
		
    if (sceneCounter == sceneTotal) {
        sceneCounter = 0;
    }

		// PLATFORM GAME
    if (scene == 'scene4') {
			//comment out conditional body to test framework without games
      // suspend click to prevent leaving game on click to body
			disableClick();
			// run the platform game code
			platform();
			// destroy game on completion and call changeScene() -- added to platform game by deploy script
		}

		// MATCHING GAME
    if (scene == 'scene8') {
			//comment out conditional body to test framework without games
      // suspend click to prevent leaving game on click to body
			disableClick();
			document.getElementById("scene8").style.zIndex = "1000"; 
			// run the matching game code
			matching();
			// call changeScene() -- added to matching game by deploy script
		}

		// MUSIC GAME
    if (scene == 'scene12') {
			//comment out conditional body to test framework without games
      // suspend click to prevent leaving game on click to body
			disableClick();
			// run the music game code
			music();
			// destroy game on completion and call changeScene() -- added to platform game by deploy script
		}

    if (scene == 'scene5') {
        qr1_5.classList.remove('hidden');
        setTimeout(() => {
            qr1_5.classList.remove('no-opacity');
        }, 0);
    }
    if (scene == 'scene9') {
        qr1_9.classList.remove('hidden');
        setTimeout(() => {
            qr1_9.classList.remove('no-opacity');
        }, 0);
        qr2_9.classList.remove('hidden');
        setTimeout(() => {
            qr2_9.classList.remove('no-opacity');
        }, 0);
        setTimeout(() => {
            qr1_9.style.transform = 'translateX(50%)';
            qr2_9.style.transform = 'translateX(-50%)';
        }, 1000);
    }

    if (scene == 'scene13') {
        qr1_13.classList.remove('hidden');
        setTimeout(() => {
            qr1_13.classList.remove('no-opacity');
        }, 0);
        qr2_13.classList.remove('hidden');
        setTimeout(() => {
            qr2_13.classList.remove('no-opacity');
        }, 0);
        qr3.classList.remove('hidden');
        setTimeout(() => {
            qr3.classList.remove('no-opacity');
        }, 0);
        setTimeout(() => {
            qr1_13.style.transform = 'translateX(50%)';
            qr2_13.style.transform = 'translateX(50%)';
            qr3.style.transform = 'translateX(-50%)';
        }, 1000);
    }

    if (scene == 'scene1') {
        resetGame();
    }

    // console.log("scene:", scene);
    // console.log("sceneCounter:", sceneCounter);
}

function resetGame() {
    qr1_9.style.transform = 'translateX(0%)';
    qr2_9.style.transform = 'translateX(0%)';
    qr1_13.style.transform = 'translateX(0%)';
    qr2_13.style.transform = 'translateX(0%)';
    qr3.style.transform = 'translateX(0%)';
}

function moreCats() {
    setInterval(() => {
        if (document.title == "🐈🐈🐈🐈🐈🐈🐈🐈🐈🐈") {
            document.title = "";
        }
        document.title = document.title + "🐈";
    }   
    , 1000);
}

moreCats();

function addClass(el) {
    el.classList.add('no-opacity');
    setTimeout(() => {
        el.classList.add('hidden');
    }, 2000);
}

function removeClass(el) {
    el.classList.remove('hidden');
    setTimeout(() => {
        el.classList.remove('no-opacity');
    }, 0);
}
