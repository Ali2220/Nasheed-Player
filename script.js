var arr = [
  { songName: 'i rise', url: './songs/i rise.mp3', img: './images/irise.jpeg' },
  {
    songName: 'jamal al wujood',
    url: './songs/jamal al wujood.mp3',
    img: './images/jamalalwujood.jpeg',
  },
  {
    songName: 'my hope',
    url: './songs/my hope.mp3',
    img: './images/myhope.jpeg',
  },
  {
    songName: 'taballag',
    url: './songs/taballag.mp3',
    img: './images/taballag.jpeg',
  },
];

var allsongs = document.querySelector('#all-songs');
var poster = document.querySelector("#left") 
var audio = new Audio();
var selectedSong = 0;
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

function mainFunction() {
  var clutter = '';

  arr.forEach(function (elem, index) {
    clutter += `  <div class="song-card" id = "${index}">
    <div class="part1">
      <img
        src="${elem.img}"
        alt=""
      />
      <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
  </div>`;
  });

  allsongs.innerHTML = clutter;

  audio.src = arr[selectedSong].url;

  poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}

mainFunction();

allsongs.addEventListener('click', function (details) {
  selectedSong = details.target.id;
  mainFunction();
  play.innerHTML = `<i class="ri-pause-line"></i>`
  flag = 1
  audio.play();

});

// if flag is 0 then it is pause, if 1 then it is play
var flag = 0

play.addEventListener("click", function(){
    if(flag == 0 ){
    play.innerHTML = `<i class="ri-pause-line"></i>`
    mainFunction()
    audio.play()
    flag = 1
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function(){
  if(selectedSong < arr.length - 1){
    selectedSong++
    mainFunction()
    audio.play()
  }

  else{
    forward.style.opacity = 0.4
  }
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
      selectedSong--
      mainFunction()
      audio.play()
    }
  
    else{
      backward.style.opacity = 0.4
    }
  })