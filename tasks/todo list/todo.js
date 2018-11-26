
let myTodo = [];

function addList() {
    
    if(document.getElementById("myInput").value != ""){
        
        myTodo.push(document.getElementById("myInput").value);

    }
    
    showList();

    document.getElementById("myInput").value = "";
}

function showList(){
    
    let list = "";
    
    list = "<ul>";

    for (let i = 0; i < myTodo.length; i++) {
        
        list += "<li>" + myTodo[i] + "     <a href='#' onclick='return deleteItem(" + i + ");'>x</a></li>";
    
    }
    
    list += "</ul>";
    
    document.getElementById("Result").innerHTML = list;

}

function deleteItem(item){

    let itemtodelete = item;
    
    myTodo.splice(itemtodelete, 1 );
    
    showList();
}

