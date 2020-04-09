function submitBtn (buttonId) {
    let goalNum = buttonId.slice(buttonId.length -1)
    let funcId = {
        origianl: buttonId,
        input: "goalInp" + goalNum,
        Quan: "goalQuan" + goalNum,
        units: "units" + goalNum,
        Goal: "GoalName" + goalNum,
        chartName: "myChart" + goalNum,
        form: "form" + goalNum,
        current: 'current' + goalNum,
    }
    let Goals = {
        name: document.getElementById(funcId.input).value,
        Quantity: document.getElementById(funcId.Quan).value,
        units: document.getElementById(funcId.units).value,
        current: document.getElementById(funcId.current).value,
    }

    changeHTML(funcId);
    LoadChart(funcId, Goals);
    console.log(funcId);
}
function changeHTML (funcId) {
    let GoalName = document.getElementById(funcId.input).value;
    document.getElementById(funcId.Goal).textContent = GoalName;
    document.getElementById(funcId.chartName).style.display = 'block';
    document.getElementById(funcId.form).style.display = 'none';
}
function LoadChart (funcId, Goals) {
    var ctx = document.getElementById(funcId.chartName).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
            data: {
                labels: [Goals.units],
                datasets: [{
                    label: "Current Value",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [Goals.current]
                    },{
                    label: "Goal",
                    backgroundColor: "rgb(135,206,235)",
                    borderColor: "rgb(135,206,235)",
                    data: [(Goals.Quantity)-(Goals.current)]
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
                });
}
