// Iteration 1: Declare variables required for this game
const shotGunSound=new Audio("./assets/shotgun.wav");
const game_body=document.getElementById("game-body");
const backgroundSounds=new Audio("./assets/bgm.mp3");


let zombieId=1;
let lives=4;
let lifewidth=100;

game_body.addEventListener('click',shotgunSound)

// Iteration 1.2: Add shotgun sound

function shotgunSound(){
    shotGunSound.pause();
    shotGunSound.currentTime=0;
    shotGunSound.play();
}

// Iteration 1.3: Add background sound

// backgroundSounds.play();


// backgroundSounds.play();
backgroundSounds.loop=true;
backgroundSounds.play();

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie
let zombie;

function createZombie(){
    let number=helperRandomInteger(1,6);
    game_body.innerHTML +=`<img src=./assets/zombie-${number}.png alt=zombie class=zombie-image id=zombie${zombieId} />`

    zombie=document.getElementById(`zombie${zombieId}`)
    zombie.style.transform=`translateX(${helperRandomInteger(20,80)}vw)`
    zombie.style.animationDuration=`${helperRandomInteger(2,6)}s`;
    zombie.addEventListener('click',()=>{destroyZombie(zombie)});
}


createZombie();
// Iteration 3: Write a function to check if the player missed a zombie

function zombieEscape(zombie){
    if(lives==0){
        location.href='game-over.html'
    } else if(zombie.getBoundingClientRect().top<=0){
        lives--;
        lifewidth-=25;
        document.getElementById("lives").style.width=`${lifewidth}%`
        destroyZombie(zombie);
    }
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function destroyZombie(zombie){
    zombie.style.display='none';
    zombieId++;
    createZombie();
}

// Iteration 5: Creating timer

let time=60;
setInterval(timer,1000)


function timer(){
    const timing=document.getElementById("timer");
    if(time==0){
        location.href='win.html'
    }else{
        timing.innerText=time;
        time--;
        zombieEscape(zombie);
    }
}


// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer


function helperRandomInteger(min,max){
    return Math.floor(Math.random()*max)+min
}
