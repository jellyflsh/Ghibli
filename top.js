// Liste des chansons avec album, titre, popularité et image
const songs = [
    { title: "Merry-Go-Round of Life", album: "FREEDOM PIANO STORIES 4", popularity: 66, img: "images/freedom.jpg" },
    { title: "The Flower Garden", album: "Howl's Moving Castle Soundtrack", popularity: 64, img: "images/hmcs.jpg" },
    { title: "One Summer Day", album: "Spirited Away Soundtrack", popularity: 63, img: "images/sas.jpg" },
    { title: "You're in Love", album: "Howl's Moving Castle Soundtrack", popularity: 61, img: "images/hmcs.jpg" },
    { title: "Opening Song", album: "Howl's Moving Castle Soundtrack", popularity: 56, img: "images/hmcs.jpg" },
    { title: "A Walk in the Skies", album: "Howl's Moving Castle Soundtrack", popularity: 54, img: "images/hmcs.jpg" },
    { title: "The Sixth Station", album: "Spirited Away Soundtrack", popularity: 54, img: "images/sas.jpg" },
    { title: "Merry-Go-Round of Life", album: "A Symphonic Celebration", popularity: 53, img: "images/symphonic.jpg" },
    { title: "Day Of The River", album: "Spirited Away Soundtrack", popularity: 53, img: "images/sas.jpg" },
    { title: "In the Rain", album: "Howl's Moving Castle Soundtrack", popularity: 50, img: "images/hmcs.jpg" }
];

const songContainer = document.querySelector('.song-container');

function displaySongs() {
    songContainer.innerHTML = ''; // Vider le conteneur avant de remplir

    // Diviser les chansons en deux colonnes
    const firstColumnSongs = songs.slice(0, 5); // 1er groupe de 5 chansons
    const secondColumnSongs = songs.slice(5, 10); // 2ème groupe de 5 chansons

    // Fonction pour créer une colonne
    function createColumn(songsArray, columnClass) {
        const column = document.createElement('div');
        column.classList.add(columnClass); // Ajouter une classe de colonne

        songsArray.forEach((song, index) => {
            const songCard = document.createElement('div');
            songCard.classList.add('song-card');

            // Ajouter le contenu à la carte
            songCard.innerHTML = `
                <div class="ranking">${index + 1}</div>
                <img src="${song.img}" alt="Image de la chanson">
                <div class="song-info">
                    <h4>${song.title}</h4>
                    <p>${song.album}</p>
                </div>
                <div class="popularity">
                    <span>Popularité</span>
                    ${song.popularity}
                </div>
            `;

            // Ajouter la carte à la colonne
            column.appendChild(songCard);
        });

        // Ajouter la colonne au conteneur
        songContainer.appendChild(column);
    }

    // Créer les deux colonnes
    createColumn(firstColumnSongs, 'song-column'); // Première colonne
    createColumn(secondColumnSongs, 'song-column'); // Deuxième colonne
}


// Initialisation
displaySongs();
