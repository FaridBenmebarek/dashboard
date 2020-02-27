new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Lille", "Marseilles", "Lyon", "Paris", "Nantes"],
        datasets: [{
            label: "Users",
            backgroundColor: ["#042d48", "#4e9ba5", "#07775f", "#865d52", "#961107"],
            data: [100, 200, 250, 300, 120]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Villes des acheteurs'
        }
    }
});