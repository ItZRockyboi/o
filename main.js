above_lipX = 0 ;
above_lipY = 0 ;
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

}


function draw(){
image(video,0,0,300,300);
image(mustache,above_lipX,above_lipY,30,30)
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on("pose",got_poses);

}

function modelloaded(){
    console.log("poseNet Loaded");
}


function got_poses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y;
        console.log("above lip x= "+above_lipX);
        console.log("above lip y= "+above_lipY);
    }
}

function preload(){
clown_nose = loadImage("on.png");
}


function takesnapshot(){
save("HimanshuVyas.png");
}