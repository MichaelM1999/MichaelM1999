document.addEventListener("DOMContentLoaded", function(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
            data: {
                labels: ["Goal:1"],
                datasets: [{
                    label: 'Goal 1',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [50,]
                    }]
                },
                options: {
                }
                });
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'bar',
            data: {
                labels: ["Goal:1"],
                datasets: [{
                    label: 'Goal 1',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [50,]
                    }]
                },
                options: {
                }
                });   
    var ctx3 = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx3, {
        type: 'bar',
            data: {
                labels: ["Goal:1"],
                datasets: [{
                    label: 'Goal 1',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [50,]
                    }]
                },
                options: {
                }
                });    
});
