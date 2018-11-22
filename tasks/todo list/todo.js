
let myTodo = [];

function addList() {
    
    //console.log(document.getElementById("myInput").value);
    //document.getElementById("Result").innerHTML = document.getElementById("myInput").value;

    if(document.getElementById("myInput").value != ""){
        
        myTodo.push(document.getElementById("myInput").value);

    }
    
    console.log(myTodo);
}

