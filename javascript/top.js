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

    // Créer la première rangée (Top 1)
    const top1Card = document.createElement('div');
    top1Card.classList.add('song-card', 'top-1');
    top1Card.innerHTML = `
        <div class="ranking">#1</div>
        <img src="${songs[0].img}" alt="Image de ${songs[0].title}">
        <div class="song-info">
            <h4>${songs[0].title}</h4>
            <p>${songs[0].album}</p>
            <span class="popularity">Popularité: ${songs[0].popularity}</span>
        </div>
    `;
    const topRow = document.createElement('div');
    topRow.classList.add('song-row');
    topRow.appendChild(top1Card);
    songContainer.appendChild(topRow);

    // Créer les autres rangées
    const rows = [
        [1, 5], // #2 et #6
        [2, 6], // #3 et #7
        [3, 7], // #4 et #8
        [4, 8], // #5 et #9
    ];

    rows.forEach((rowIndexes) => {
        const row = document.createElement('div');
        row.classList.add('song-row');

        rowIndexes.forEach(index => {
            const song = songs[index]; // Récupérer la chanson basée sur l'index
            const rank = index + 1; // Rank corresponds to the song's position
            const songCard = document.createElement('div');
            songCard.classList.add('song-card');
            songCard.innerHTML = `
                <div class="ranking">#${rank}</div>
                <img src="${song.img}" alt="Image de ${song.title}">
                <div class="song-info">
                    <h4>${song.title}</h4>
                    <p>${song.album}</p>
                    <span class="popularity">Popularité: ${song.popularity}</span>
                </div>
            `;
            row.appendChild(songCard);
        });

        songContainer.appendChild(row);
    });
}

// Initialisation
displaySongs();
