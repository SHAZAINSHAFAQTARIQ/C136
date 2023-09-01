status = "";
video = "";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelloaded()
{
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw()
{
    image(video, 0, 0, 480,380);
}