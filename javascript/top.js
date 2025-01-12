const songs = [
    { title: "Merry-Go-Round of Life", album: "FREEDOM PIANO STORIES 4", popularity: 66, img: "content/images/freedom.jpg" },
    { title: "The Flower Garden", album: "Howl's Moving Castle Soundtrack", popularity: 64, img: "content/images/hmcs.jpg" },
    { title: "One Summer Day", album: "Spirited Away Soundtrack", popularity: 63, img: "content/images/sas.jpg" },
    { title: "You're in Love", album: "Howl's Moving Castle Soundtrack", popularity: 61, img: "content/images/hmcs.jpg" },
    { title: "Opening Song", album: "Howl's Moving Castle Soundtrack", popularity: 56, img: "content/images/hmcs.jpg" },
    { title: "A Walk in the Skies", album: "Howl's Moving Castle Soundtrack", popularity: 54, img: "content/images/hmcs.jpg" },
    { title: "The Sixth Station", album: "Spirited Away Soundtrack", popularity: 54, img: "content/images/sas.jpg" },
    { title: "Merry-Go-Round of Life", album: "A Symphonic Celebration", popularity: 53, img: "content/images/symphonic.jpg" },
    { title: "Day Of The River", album: "Spirited Away Soundtrack", popularity: 53, img: "content/images/sas.jpg" }
];

function displaySongs() {
    const songContainer = document.querySelector('.song-container');
    songContainer.innerHTML = '';

    const sortedSongs = [...songs].sort((a, b) => b.popularity - a.popularity);

    const top1Card = document.createElement('div');
    top1Card.classList.add('song-card', 'top-1');
    top1Card.innerHTML = `
        <div class="ranking">#1</div>
        <img src="${sortedSongs[0].img}" alt="Image de ${sortedSongs[0].title}">
        <div class="song-info">
            <h4>${sortedSongs[0].title}</h4>
            <p>${sortedSongs[0].album}</p>
            <span class="popularity">Popularité: ${sortedSongs[0].popularity}</span>
        </div>
    `;
    const topRow = document.createElement('div');
    topRow.classList.add('song-row');
    topRow.appendChild(top1Card);
    songContainer.appendChild(topRow);

    const rows = [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
    ];

    rows.forEach((rowIndexes) => {
        const row = document.createElement('div');
        row.classList.add('song-row');

        rowIndexes.forEach(index => {
            if (index < sortedSongs.length) {
                const song = sortedSongs[index];
                const rank = index + 1;
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
            }
        });

        songContainer.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displaySongs();
});
