

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