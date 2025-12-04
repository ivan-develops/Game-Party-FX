const tracks = [
    {
        name: 'Ya no aguanto más',
        sound: 'data/sounds/ya-no-aguanto-mas.mp3',
        thumb: 'img/thumb-track.svg',
    },
    {
        name: 'Dios mio sálvame',
        sound: 'data/sounds/dios-mio-salvame.mp3',
        thumb: 'img/thumb-track.svg',
    },
    {
        name: 'Que vivan los mongólicos',
        sound: 'data/sounds/que-vivan-los-mongolicos-diomedes-diaz.mp3',
        thumb: 'img/thumb-track.svg',
    },
    {
        name: 'Maricaaa',
        sound: 'data/sounds/maricaa.mp3',
        thumb: 'img/thumb-track.svg',
    },
    {
        name: 'Quedé mínimo común',
        sound: 'data/sounds/quede-minimo-comun.mp3',
        thumb: 'img/thumb-track.svg',
    },
    {
        name: 'Señor me has mirado a los ojos',
        sound: 'data/sounds/senor-me-has-mirado-a-los-ojos.mp3',
        thumb: 'img/thumb-track.svg',
    },
    {
        name: 'Feliz navidad inmundo animal',
        sound: 'data/sounds/feliz-navidad-inmundo-animal.mp3',
        thumb: 'img/thumb-track.svg',
    },
    {
        name: 'Sell sintio el verdadero terror',
        sound: 'data/sounds/sell-sintio-el-verdadero-terror.mp3',
        thumb: 'img/thumb-track.svg',
    },{
        name: 'Va jugar o qué',
        sound: 'data/sounds/va-jugar-o-que.mp3',
        thumb: 'img/thumb-track.svg',
    },{
        name: 'solo quedan las ganas de llorar',
        sound: 'data/sounds/solo-quedan-las-ganas-de-llorar.mp3',
        thumb: 'img/thumb-track.svg',
    },
];

const container_tracks = document.getElementById('container-tracks');

tracks.forEach(track => {
    const newTrack = document.createElement('article');
    newTrack.className = 'track';
    newTrack.innerHTML = `
        <div class="track__thumb-container">
            <img src="${track.thumb}" alt="thumb track" class="track__thumb">
        </div>
        <h2 class="track__name">${track.name}</h2>
    `;
    newTrack.addEventListener('click' , ()=> {
        const sonido = new Audio(track.sound);
        sonido.play();
    })
    container_tracks.appendChild(newTrack);
});