var ctx = document.getElementById('line-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet"],
        datasets: [{
            label: "acheteurs",
            backgroundColor: 'rgb(111, 2, 25)',
            borderColor: 'rgb(16, 11, 12)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});