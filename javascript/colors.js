document.addEventListener("DOMContentLoaded", function () {
    const colors = document.querySelectorAll(".color");
    const gridSize = 7;

    function getNeighbors(index, maxDistance) {
        const neighbors = [];
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;

        for (let d = 1; d <= maxDistance; d++) {
            for (let r = -d; r <= d; r++) {
                for (let c = -d; c <= d; c++) {
                    if (Math.abs(r) + Math.abs(c) === d) {
                        const neighborRow = row + r;
                        const neighborCol = col + c;

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

    colors.forEach((color, index) => {
        color.addEventListener("mouseenter", () => {
            colors.forEach((c) => {
                c.classList.remove("hovered", "distance-1", "distance-2", "distance-3");
            });

            color.classList.add("hovered");

            const neighbors = getNeighbors(index, 3);

            neighbors.forEach(({ index: neighborIndex, distance }) => {
                const neighbor = colors[neighborIndex];
                if (distance === 1) neighbor.classList.add("distance-1");
                if (distance === 2) neighbor.classList.add("distance-2");
                if (distance === 3) neighbor.classList.add("distance-3");
            });
        });

        color.addEventListener("mouseleave", () => {
            colors.forEach((c) => {
                c.classList.remove("hovered", "distance-1", "distance-2", "distance-3");
            });
        });
    });
});
