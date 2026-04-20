function playAudio() {
    const audio = document.getElementById("audio");
    const bar = document.getElementById("audio_bar");
  
    audio.currentTime = 198;
    audio.play();
    setTimeout(() => audio.pause(), 9000);
  
    audio.ontimeupdate = () => bar.value = audio.currentTime - 198;
  }