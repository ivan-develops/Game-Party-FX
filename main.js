import {tracks} from './data/tracks.js';

const container_tracks = document.getElementById('container-tracks');
// const track__thumbContainer = document.getElementById('track__thumb-container');

tracks.forEach((track,indice) => {
    const newTrack = document.createElement('article');
    newTrack.className = 'track';
    newTrack.innerHTML = `
        <div class="track__thumb-container" id="track__thumb-container${indice}">
            <img src="${track.thumb}" alt="thumb track" class="track__thumb">
        </div>
        <h2 class="track__name">${track.name}</h2>
    `;
    newTrack.addEventListener('click' , ()=> {
        const sonido = new Audio(track.sound);
        sonido.play();
        const track__thumbContainer = document.getElementById(`track__thumbContainer${indice}`);
        track__thumbContainer.innerHTML = `
            <img src="playing-track.svg" alt="playing-track">
        `;
    })
    container_tracks.appendChild(newTrack);
});