console.log("ml5 version:",ml5.version);

noseX= 0;
noseY= 0;
difference=0;
leftWrist= 0;
rightWrist=0;
 
function preload(){

}

function setup(){
    canvas= createCanvas(500,500);
    canvas.position(700,210);
    video= createCapture(VIDEO);
    video.size(550,500);
    video.position(0,210);
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    document.getElementById("result").innerHTML= "Width and Height of the square is: "+difference+" pixels";
    background("#969A97");
    stroke("#B4846C");
    fill("#B4846C");
square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log("posenet is loaded :D")
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        noseX= result[0].pose.nose.x;
        noseY= result[0].pose.nose.y;
        leftWrist= result[0].pose.leftWrist.x;
        rightWrist= result[0].pose.rightWrist.x;
        difference= abs(floor(leftWrist-rightWrist));
    }
}