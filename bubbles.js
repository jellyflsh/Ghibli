// Données CSV intégrées directement dans le script
const csvData = `
title,genre_1
Nausicaä de la vallée du vent,Fantasy
Le château dans le ciel,Fantasy
Mon voisin Totoro,Fantasy
Le tombeau des lucioles,Drama
KIki la petite sorcière,Fantasy
Souvenirs goutte à goutte,Nostalgia
Porco Rosso,Adventure
Pom Poko,Adventure
Je peux entendre l'océan,Nostalgia
Si tu tends l'oreille,Drama
Princesse Mononoke,Fantasy
Mes voisins Yamada,Comedy
Le voyage de Chihiro,Fantasy
Le Royaume des Chats,Comedy
Le Château Ambulant,Fantasy
Les Contes de Terremer,Drama
Ponyo sur la Falaise,Fantasy
Arietty le petit monde des Chapardeurs,Fantasy
La colline aux coquelicots,Nostalgia
Le vent se lève,Nostalgia
Le conte de la princesse Kaguya,Drama
Souvenirs de Marnie,Fantasy
Le Garçon et le Héron,Fantasy
`;

// Fonction pour parser les données CSV
function parseCSVData(data) {
    const rows = data.trim().split('\n');
    const genres = rows.slice(1).map(row => row.split(',')[1]); // Extraire la deuxième colonne (genre)
    return genres;
}

// Fonction pour créer le graphique à bulles
function createBubbleChart(filmsGhibliGenres) {
    const genreCounts = filmsGhibliGenres.reduce((acc, genre) => {
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
    }, {});

    const genres = Object.keys(genreCounts);
    const counts = Object.values(genreCounts);

    const getColor = (index) => {
        const colors = [
            'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 255, 0.5)', 'rgba(154, 205, 50, 0.5)', 'rgba(0, 255, 255, 0.5)',
            'rgba(255, 69, 0, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(255, 20, 147, 0.5)'
        ];
        return colors[index % colors.length];  // Répète les couleurs si nécessaire
    };

    const bubbleData = genres.map((genre, index) => {
        const x = index * 50 + 50;  // Position X espacée en fonction de l'index
        const y = Math.random() * 500 + 50;  // Position Y aléatoire
        const r = counts[index] * 10; // Taille de la bulle proportionnelle au nombre de films
        return {
            x, y, r, backgroundColor: getColor(index)
        };
    });

    // Création du graphique à bulles
    const ctx = document.getElementById('bubbleChart').getContext('2d');
    const bubbleChart = new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                data: bubbleData,
                backgroundColor: bubbleData.map(bubble => bubble.backgroundColor),
                borderColor: bubbleData.map(bubble => bubble.backgroundColor),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false // Désactiver la légende
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            const genreIndex = tooltipItem.dataIndex;
                            const genreName = genres[genreIndex];
                            const genreCount = counts[genreIndex];
                            return `${genreName}: ${genreCount} films`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: 0,
                    max: 600,  // Limite de l'axe X
                    ticks: {
                        display: false // Masquer les ticks de l'axe X
                    },
                    grid: {
                        display: false // Masquer le quadrillage de l'axe X
                    }
                },
                y: {
                    min: 0,
                    max: 600,  // Limite de l'axe Y
                    ticks: {
                        display: false // Masquer les ticks de l'axe Y
                    },
                    grid: {
                        display: false // Masquer le quadrillage de l'axe Y
                    }
                }
            }
        }
    });
}

// Parser les données CSV et créer le graphique
const filmsGhibliGenres = parseCSVData(csvData);
createBubbleChart(filmsGhibliGenres);
