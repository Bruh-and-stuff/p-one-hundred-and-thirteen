//teachablemachine: https://teachablemachine.withgoogle.com/models/mhgNqS1fP/model.json
gestar1 = ""
Webcam.set({
    width:485,
    height:440,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")

function takePic(){
    Webcam.snap(
    function(data_url){
        document.getElementById("pictaken").innerHTML = "<img id='imageTaken' src='"+data_url+"'</img>"
    }
)
}

console.log("ml5 version: ", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mhgNqS1fP/model.json", modelL)
function modelL(){
    console.log("Loaded.")
}
  function utter(){
    var synthesis = window.speechSynthesis;
    data_1 = "our sign is "+gestar1+"."
    
  
    var sayThis = new SpeechSynthesisUtterance(data_1)
    synthesis.speak(sayThis);
  }

  function predict(){
    img = document.getElementById("imageTaken")
    classifier.classify(img, shower)
  }

  function shower(error, result){
    if(error){
      console.error(error)
    }
    else{
      console.log(result)
      document.getElementById("desc1").innerHTML = result[0].label
      gestar1 = result[0].label
      utter()

      if(result[0].label == "Thumbs Up"){
        document.getElementById("gester").innerHTML = "&#128077;"
      }
      else if(result[0].label == "Peace Out"){
        document.getElementById("gester").innerHTML = "&#9996;"
      }
      else if(result[0].label == "Ponting"){
        document.getElementById("gester").innerHTML = "☝️"
      }
      else if(result[0].label == "Rocking"){
        document.getElementById("gester").innerHTML = "&#129304;"
      }
      else if(result[0].label == "High Five"){
        document.getElementById("gester").innerHTML = "&#9995;"
      }
  }
  }


