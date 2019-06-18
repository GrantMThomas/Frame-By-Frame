
var images = [];
var numimages = 13;
var currentimage = 0;
var playing = false;
var framerate = 12;

for(let i = 0; i < numimages; i++){
    images.push("images/frame" + (i+1) + ".tiff");
    console.log(images[i])
}

document.getElementById("rightarrow").onclick = function(){
    currentimage++;
    if(currentimage >= numimages){
        currentimage = 0;
    }
    document.getElementById("frame").src = images[currentimage];
}

document.getElementById("leftarrow").onclick = function(){
    currentimage--;
    if(currentimage <= 0){
        currentimage = numimages-1;
    }
    document.getElementById("frame").src = images[currentimage];
}

function play(){
    if(currentimage >= numimages){
        return;
    }
    document.getElementById("frame").src = images[currentimage];
    currentimage++;
    console.log("playing");
    setTimeout(play,1000/framerate);

}

document.getElementById("play").onclick = function(){
    currentimage = 0;
    setTimeout(play,1000/framerate);
}