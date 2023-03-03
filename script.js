// alert("Welcome To AMD Musics")
let songIndex = 0 
let audioElement = new Audio('songs/0.mp3')
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItems'))
let masterSongName = document.getElementById('masterSongName')

let songs = [

    {name:"Animal" , filePath:"songs/0.mp3"},
    {name:"Tiger" , filePath:"songs/1.mp3"},
    {name:"KGF" , filePath:"songs/2.mp3"},
    {name:"Pathan" , filePath:"songs/3.mp3"},
    {name:"Taqdeer" , filePath:"songs/4.mp3"}
] 

songItems.forEach((element , i)=>{
    element.getElementsByClassName('songName')[0].innerText = songs[i].name
})


// HANDEL PLAY AND PAUSE 

masterplay.addEventListener('click', () => {

    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        gif.style.opacity=1

    }
    else{

        audioElement.pause();
        masterplay.classList.add('fa-play')
        masterplay.classList.remove('fa-pause')
        gif.style.opacity=0

    }
    
    
})


// SEEK BAR 


audioElement.addEventListener('timeupdate' , () => {
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value = progress
   
})

myprogressbar.addEventListener('change' , ()=>{

    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100

})
const musicallplay = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.add("fa-play")
        element.classList.remove("fa-pause")
    })
} 


Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        musicallplay();
        songIndex =parseInt(e.target.id)
        masterSongName.innerText = songs[songIndex].name
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')

    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=4)
    {
        songIndex = 0 ;
    }
    else{
        songIndex += 1 ;
    }
    masterSongName.innerText = songs[songIndex].name
    audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')

    
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0)
    {
        songIndex = 4 ;
    }
    else{
        songIndex -= 1 ;
    }
    masterSongName.innerText = songs[songIndex].name
    audioElement.src = `songs/${songIndex}.mp3`
        audioElement.currentTime = 0
        audioElement.play()
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')

    
})