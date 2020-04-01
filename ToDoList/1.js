btnAdd.addEventListener("click", addToDoItem, false);
ToDo.addEventListener("keydown", addToDoItem, false )

var toDoList = [];

function addToDoItem(e) {
    if((e.type == "keydown") && (e.keyCode != 13)) {
        return;
    }
    if (ToDo.value.length < 1) {
        return;
    }
    if (!toDoList.includes(ToDo.value)) {
        var toDoItem = document.createElement("li");

        toDoItem.innerText = ToDo.value;
        list.appendChild(toDoItem);

        toDoItem.addEventListener("click", toDoItemDone, false);
        function toDoItemDone(e) {
            if (e.target.style.textDecoration == "line-through") {
                e.target.style.textDecoration = "";
            } else {
                e.target.style.textDecoration = "line-through";
            }
        }
        
        var toDoBtn = document.createElement("button");
        toDoBtn.setAttribute("id", "deletebox");
        var txt =document.createTextNode("\u00D7");
        toDoBtn.appendChild(txt);
        toDoItem.appendChild(toDoBtn);

        toDoBtn.addEventListener("click", toDoItemRemove, false);
        function toDoItemRemove(e) {
            if (confirm("I need to delete this item?")) {
                toDoItem.remove();
            }
        }

        toDoList.push(ToDo.value);
        ToDo.value = "";
    }
}