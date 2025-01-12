document.addEventListener("DOMContentLoaded", function () {
    const colors = document.querySelectorAll(".color"); // Tous les éléments de la grille
    const gridSize = 7; // Taille de la grille (7x7)

    // Fonction pour calculer les voisins selon la distance
    function getNeighbors(index, maxDistance) {
        const neighbors = [];
        const row = Math.floor(index / gridSize); // Ligne de l'élément survolé
        const col = index % gridSize; // Colonne de l'élément survolé

        for (let d = 1; d <= maxDistance; d++) {
            // Parcourt les distances de 1 à maxDistance
            for (let r = -d; r <= d; r++) {
                for (let c = -d; c <= d; c++) {
                    if (Math.abs(r) + Math.abs(c) === d) {
                        const neighborRow = row + r;
                        const neighborCol = col + c;

                        // Vérifie si le voisin est dans les limites de la grille
                        if (
                            neighborRow >= 0 &&
                            neighborRow < gridSize &&
                            neighborCol >= 0 &&
                            neighborCol < gridSize
                        ) {
                            const neighborIndex = neighborRow * gridSize + neighborCol;
                            neighbors.push({ index: neighborIndex, distance: d });
                        }
                    }
                }
            }
        }

        return neighbors;
    }

    // Gère le survol d'un élément
    colors.forEach((color, index) => {
        color.addEventListener("mouseenter", () => {
            // Réinitialise toutes les classes
            colors.forEach((c) => {
                c.classList.remove("hovered", "distance-1", "distance-2", "distance-3");
            });

            // Applique la classe "hovered" au survolé
            color.classList.add("hovered");

            // Obtiens les voisins jusqu'à distance 3
            const neighbors = getNeighbors(index, 3);

            // Applique les classes selon la distance
            neighbors.forEach(({ index: neighborIndex, distance }) => {
                const neighbor = colors[neighborIndex];
                if (distance === 1) neighbor.classList.add("distance-1");
                if (distance === 2) neighbor.classList.add("distance-2");
                if (distance === 3) neighbor.classList.add("distance-3");
            });
        });

        // Quand la souris quitte l'élément
        color.addEventListener("mouseleave", () => {
            // Réinitialise toutes les classes
            colors.forEach((c) => {
                c.classList.remove("hovered", "distance-1", "distance-2", "distance-3");
            });
        });
    });
});
