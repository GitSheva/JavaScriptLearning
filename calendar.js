function start(){
    
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    //let day = now.getDate();
    
    document.getElementById("year").value = currentYear;
    document.getElementById("month").value = currentMonth;

    drawCalendar(currentYear,currentMonth);

}

function changeDate(){

    let y = document.getElementById("year").value;
    let m = document.getElementById("month").value;

    drawCalendar(y, m);
}

function drawCalendar (year, month){

    let daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let table = "<table border='1' id='calendar'>";

      let header = "";

      for (let days of daysInWeek) {
        header += "<th>" + days + "</th>";
       
      }

      let matrix = getMatrix(year, month);

      let body = "";

    for(let row = 0; row < matrix.length; row++) {
   
        let element = matrix[row];
        body += "<tr>";
        
        
        for(let column = 0; column < element.length; column++) {
            
            if (element[column] != 0){
                body += "<td align='center'><a href='#' onclick='return showDate(this.innerText);'>" + element[column] + "</a></td>";
            }else{
                body += "<td align='center'>" + element[column] + "</td>";
            }
            
        }
         
        body += "</tr>";
    }

     let endTable = "</table>";  


    document.getElementById("myCalendar").innerHTML = table + header + body + endTable;

}

function showDate(date){
    
    let day = date;
    let y = document.getElementById("year").value;
    let m = document.getElementById('month').options[document.getElementById('month').selectedIndex].text;

    document.getElementById("divResult").innerHTML = "Yor Date is: " + m + " " + day + ", " + y;

}

function getMatrix(year, month){

    let matrix = [];
    let row = 6; 
    let column = 7;
    
    let date = new Date(year, month);
    let startDay = date.getDay();
    let daysInMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    let dayCounter = 1;
    
    
    for ( let y = 0; y < row; y++ ) {
        matrix[ y ] = [];
        
            for ( let x = 0; x < column; x++ ) {
    
              if(y == 0){
    
                  if (x >= startDay) {
    
                    matrix[ y ][ x ] = dayCounter;
                    dayCounter++;
    
                  }else{
                    matrix[ y ][ x ] = 0;
                  }
              }else{
                if(dayCounter <= daysInMonth){
                        
                    matrix[ y ][ x ] = dayCounter;
                    dayCounter++;
                
                  }else{
                    matrix[ y ][ x ] = 0;
                  }
                
              }
          
            }
    }
    return matrix;

}

