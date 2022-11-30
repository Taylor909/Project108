function startListening(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QNNuB5ami/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
dogsHeard=0;
catsHeard=0;

function gotResults(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear "+ results[0].label;
        
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("nunberOfdogs_catsHeard").style= "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById("identifiedImage");

        if (results[0].label=="Cat"){
            img.src="Cat.png";
            catsHeard==catsHeard+1;
        }else if(results[0].label=="Dog"){
            img.src="Dog.png";
            dogsHeard==dogsHeard+1;
        }else{
            img.src="Ear.png";
        }
    }};