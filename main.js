neckx=0;
necky=0;

function preload() {
  diamond_necklace=loadImage('diamondnecklace');
} 

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        neckx=results[0].pose.neck.x-15;
        necky=results[0].pose.neck.y-15;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
image(diamondnecklace, neckx, necky, 30, 30);
}

function snap(){
    save('Realtimefilterapp.png');
}


