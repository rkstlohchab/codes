const songsArray = [
    {name:"Metamorphosis"},
    {name:"NeonBlade"},
    {name:"Murder In My Mind"},
    {name:"GigaChad Theme"},
    {name:"Demons In My Soul"},
    {name:"Scopin"}
]

let date = new Date();
let hrs = date.getHours();
const good = document.querySelector(".good")
const play = document.querySelector("#play")
const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
const songname = document.querySelector(".songname")
const audio = document.querySelector("#audio")
let songIndex;
var rgb = document.querySelector("#grad")

const loadsongsArray = (songsArray)=>{
    songname.textContent = songsArray.name
    audio.src = "music/" + songsArray.name + ".mp3";
}

const nextSong = ()=>{
    sngIndx = (sngIndx + 1)%songsArray.length;
    localStorage.setItem("snInd", sngIndx);
    loadsongsArray(songsArray[sngIndx])
    playMusic()
    
}
const prevSong = ()=>{
    sngIndx = (sngIndx - 1)%songsArray.length;
    localStorage.setItem("snInd", sngIndx);
    loadsongsArray(songsArray[sngIndx])
    playMusic()
}

const playMusic = ()=>{
    isPlaying = true;
    loadsongsArray(songsArray[sngIndx])
    audio.play()
    play.classList.replace('fa-play',"fa-pause")
}

const pauseMusic = ()=>{
    isPlaying = false;
    loadsongsArray(songsArray[sngIndx])
    audio.pause();
    play.classList.replace('fa-pause',"fa-play")
    console.log(localStorage.getItem("currentTime"))

}


next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);



let sngIndx = parseInt(localStorage.getItem('snInd'));

if(!sngIndx){
    sngIndx = 0;
}
loadsongsArray(songsArray[sngIndx]);


if(hrs>4 && hrs<12){
    good.innerText= "Good Morning";
}
else if(hrs>12 && hrs<15){
    good.innerText="Good Afternoon"
}
else{
    good.innerText="Good Evening"
}
let isPlaying = false;


play.addEventListener("click",()=>{
    let x = parseFloat(localStorage.getItem("currentTime"))
    audio.currentTime = x;

    console.log("x",x)
    if(isPlaying==true){
        pauseMusic()
    }
    else{
        playMusic()
    }

});

audio.addEventListener('timeupdate',(ev)=>{
    let currentTime = ev.srcElement.currentTime;
    console.log("ct",currentTime)
    if (currentTime != 0){
        localStorage.setItem("currentTime",currentTime)   
    }
})

// average rgb

function getAverageRGB(imgEl) {
    
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;
        
    if (!context) {
        return defaultRGB;
    }
    
    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
    context.drawImage(imgEl, 0, 0);
    
    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */alert('x');
        return defaultRGB;
    }
    
    length = data.data.length;
    
    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }
    
    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);
    
    return rgb;
    
}
//@average rgb