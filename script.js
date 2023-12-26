const btn = document.querySelector(".btn_play");
const nextbtn = document.querySelector("[value='next']");
const prevbtn = document.querySelector("[value='prev']");
const progress = document.querySelector(".progress");
const image = document.querySelector("img");
var audio = document.querySelector('audio'); // Update with the correct filename of your audio file
let rotation_count = 0, Id; // to count and control 

function stopRotation() {
  image.style.transform = 'rotate(' + rotation_count + 'deg)';
}

function startRotation() {
  image.style.transform = 'rotate(' + rotation_count + 'deg)';
}

btn.addEventListener("click", () => {
  if (btn.value == "play") {
    audio.play();
    Id = setInterval(() => {
      startRotation();
      rotation_count += 1;
    }, 100);
    btn.value = "pause";
    btn.innerHTML='<i class="fa-solid fa-pause"></i>';

  } else {
    audio.pause();
    stopRotation();
    clearInterval(Id);
   btn.innerHTML='<i class="fa-solid fa-play"></i>';
    btn.value = "play";
  }
});

audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
});

progress.addEventListener("change", () => {
  audio.currentTime = progress.value;
});

nextbtn.addEventListener("click", () => {
  
  if(audio.currentTime+10<audio.duration){

    
    console.log("before",audio.currentTime);

    
    audio.currentTime=audio.currentTime+10;

    
    console.log("after",audio.currentTime);
    
  }
  else{
    console.log("end of audio");
    audio.pause();
  }

});

prevbtn.addEventListener("click", () => {

  audio.currentTime -= 10;
  console.log("After: audio.currentTime =", audio.currentTime);
});

