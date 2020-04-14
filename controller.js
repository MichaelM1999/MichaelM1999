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
                    },
                    tooltips: {enabled: false},
                    hover: {mode: null},
                }
                });
}
function logInPage () {
        const logBtn = document.getElementById('logBtn')
        document.getElementById("LoginPage").style.display = 'block';
        logBtn.style.display = 'none';
        logBtn.innerHTML = 'Log-Out';
        console.log(logBtn.innerHTML)
}
function loginForm() {
    let username = document.getElementById("username").value
    let Password = document.getElementById("Password").value
    if (username === "" || Password === ""){
        alert("Must enter a valid username and password")
    } else {
        sessionStorage.setItem("Username", username);
        sessionStorage.setItem("Password", Password);
        document.getElementById("LoginPage").style.display = 'none';
        document.getElementById("MainPage").style.display = 'block';
        document.getElementById("WelcomeTxt").style.display = 'block';
        document.getElementById("WelcomeTxt").innerHTML = "Welcome " + username;
    }
}
function logoutB() {
    sessionStorage.clear();
    document.getElementById('MainPage').style.display = 'none';
    document.getElementById("LoginPage").style.display = 'block';
    document.getElementById("WelcomeTxt").innerHTML = "";
    document.getElementById("WelcomeTxt").style.display = 'none';
}
