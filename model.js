 // Create the video
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/F6iG5dpAb/';
let video;
let flippedVideo;
let label = "";
 
 
 function createVideo(){
 video = createCapture(VIDEO);
 video.size(320, 240);
 video.hide();

 flippedVideo = ml5.flipImage(video)
 // Start classifying
 classifyVideo();
 }

 // Get a prediction for the current video frame
function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
  }
  
  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }
