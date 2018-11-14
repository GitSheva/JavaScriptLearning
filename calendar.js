function start(){
    
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
    //let day = now.getDate();
    
    document.getElementById("year").value = currentYear;
    document.getElementById("month").value = currentMonth;
}