
function init(){
    drawCalendar(2018, 10);
}

function drawCalendar(year, month){

    let dayOfTheWeeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let theader = "<table id='calendarTable' border='1'>"

    dayOfTheWeeks.forEach(d => {
        theader += "<th>" + d + "</th>";
    })

    let matrix = getMatrix(year, month);

    let tbody = "";

    matrix.forEach(function (row) {
        tbody += "<tr>";
        
        row.forEach(function(element){
            tbody += "<td>" + element + "</td>";
        });
        
        tbody += "</tr>"
    });

    let tfooter = "</table>";
    
    document.getElementById("calendar").innerHTML = theader + tbody + tfooter;
}

function getMatrix(y, m)
{
    let rows = [...Array(6).keys()];
    let cols = [...Array(7).keys()];
    let matrix = [];
    let date = new Date(y, m);
    let numDays = new Date(y, m + 1, 0).getDate();
    let dayNum;
  
    rows.forEach(row => {
        var week = [];
        
        cols.forEach(col => {
            if(row == 0){
                dayNum = col - date.getDay() + 1;
                week.push(col < date.getDay() ? -(new Date(y, m, -(date.getDay() - 1 - col)).getDate()) : dayNum);
            } else {
                dayNum = matrix[matrix.length - 1][6] + col + 1;
                week.push(dayNum <= numDays ? dayNum : -(dayNum - numDays));
            }
        });

        if (!row || week[0] > 1) matrix.push(week);
    });

    return matrix;
}