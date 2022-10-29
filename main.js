song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;


function preload(){

    song1 = loadSound("ytmp3free.cc_bts-dynamite-8d-use-headphone-youtubemp3free.org.mp3");
    song2 = loadSound("ytmp3free.cc_bts-butter-8d-audio-youtubemp3free.org.mp3");

}


function setup(){

    canvas = createCanvas(600,500);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses())
}
function modelLoaded(){

    console.log('PoseNet is initialized');

}
function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " + leftWristX + " LeftWristY = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX + " RightWristY = " + rightWristY);
    }
}
function draw(){

    image(video,0,0,600,500);

}

function play(){

    song1.play();
    song2.play();
    song1.setVolume(1);
    song1.rate(1);
    song2.setVolume(1);
    song2.rate(1);
}

function pause(){
  mutePage();
}