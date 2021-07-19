console.log("ml5 version:",ml5.version);

function preload(){

}

function setup(){
    canvas= createCanvas(500,500);
    canvas.position(700,210);
    video= createCapture(VIDEO);
    video.size(550,500);
    video.position(0,210);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses)
}

function draw(){

}

function modelLoaded(){
    console.log("posenet is loaded :D")
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
    }
}