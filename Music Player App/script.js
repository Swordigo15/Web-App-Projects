let progressBar = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
}

function playPause(){
    // ctrlIcon.innerHTML = '<i class="fa-solid fa-pause"></i>';
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }else{
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    }
}

if(song.play()){
    setInterval(()=>{
        progressBar.value = song.currentTime;
    }, 500);
}

progressBar.onchange = function(){
    song.play();
    song.currentTime = progressBar.value;
    ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
}