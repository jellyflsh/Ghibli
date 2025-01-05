// Liste des chansons
const songs = [
    { title: "Merry-Go-Round of Life", album: "FREEDOM PIANO STORIES 4", popularity: 66, img: "images/freedom.jpg" },
    { title: "The Flower Garden", album: "Howl's Moving Castle Soundtrack", popularity: 64, img: "images/hmcs.jpg" },
    { title: "One Summer Day", album: "Spirited Away Soundtrack", popularity: 63, img: "images/sas.jpg" },
    { title: "You're in Love", album: "Howl's Moving Castle Soundtrack", popularity: 61, img: "images/hmcs.jpg" },
    { title: "Opening Song", album: "Howl's Moving Castle Soundtrack", popularity: 56, img: "images/hmcs.jpg" },
    { title: "A Walk in the Skies", album: "Howl's Moving Castle Soundtrack", popularity: 54, img: "images/hmcs.jpg" },
    { title: "The Sixth Station", album: "Spirited Away Soundtrack", popularity: 54, img: "images/sas.jpg" },
    { title: "Merry-Go-Round of Life", album: "A Symphonic Celebration", popularity: 53, img: "images/symphonic.jpg" },
    { title: "Day Of The River", album: "Spirited Away Soundtrack", popularity: 53, img: "images/sas.jpg" }
];

// Fonction pour afficher les chansons
function displaySongs() {
    const songContainer = document.querySelector('.song-container');
    songContainer.innerHTML = ''; // Réinitialiser le conteneur

    // Diviser les chansons en deux colonnes
    const columns = [[], []]; // Deux colonnes vides
    songs.forEach((song, index) => {
        columns[index % 2].push(song); // Répartir les chansons entre les colonnes
    });

    // Créer les colonnes et ajouter les chansons
    columns.forEach((columnSongs) => {
        const column = document.createElement('div');
        column.classList.add('song-column');

        columnSongs.forEach((song, index) => {
            const songCard = document.createElement('div');
            songCard.classList.add('song-card');

            // Contenu de la carte
            songCard.innerHTML = `
                <div class="ranking">#${index + 1}</div>
                <img src="${song.img}" alt="Image de ${song.title}">
                <div class="song-info">
                    <h4>${song.title}</h4>
                    <p>${song.album}</p>
                    <span class="popularity">Popularité: ${song.popularity}</span>
                </div>
            `;

            column.appendChild(songCard);
        });

        songContainer.appendChild(column);
    });
}

// Initialisation
displaySongs();
