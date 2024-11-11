var ulElement = document.getElementById("list")
function addTodo(){
    var input = document.getElementById("input")
    if(input.value){
    var liElement = document.createElement("li")
    var liText = document.createTextNode(input.value)
    liElement.appendChild(liText)
    ulElement.appendChild(liElement)
    input.value = ""
    var dlt = document.createElement("button")
    var dltText = document.createTextNode("Delete")
    var edit = document.createElement("button")
    var editText = document.createTextNode("Edit")
    dlt.appendChild(dltText)
    edit.appendChild(editText)
    liElement.appendChild(dlt)
    liElement.appendChild(edit)
    dlt.setAttribute("onclick","deleteToDo(this)")
    edit.setAttribute("onclick","editBtn(this)")
    dlt.className = "delete-btn";
edit.className = "edit-btn";
liElement.className = "todo-item";
    }
    else{
        alert("Value Dalo Bhaiya")
    }
}
function Delete(){
    ulElement.innerHTML = ""
}
function deleteToDo(button){
    button.parentNode.remove()
}
function editBtn(edit){
    var updateValue = prompt("Enter Your Update Value")
    edit.parentNode.firstChild.nodeValue = updateValue
}