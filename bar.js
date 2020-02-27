new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
        labels: ["Nintendo", "PC", "Xbox", "Retro"],
        datasets: [{
            label: "Nb de jeux vendus",
            backgroundColor: ["#f15025", "#a610e5", "#2b5cb9", "#740d06"],
            data: [150, 120, 100, 45]
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Projection de ventes'
        }
    }
});