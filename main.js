noseX=0;
noseY=0;

function preload(){
   
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}