var ul = document.getElementById("myList");
var li;
var itemId;
var item;


addTask = function() {
    if(document.getElementById("task").value != "") {
        item = document.getElementById("task");
        itemId = ul.childElementCount;
        li = createItemEl(item.value,itemId);
        li.appendChild(createRemoveTaskButton(itemId));
        ul.appendChild(li);
        item.value = ""; 
    }
    
    
}

removeTask = function(itemId) {
    for (i = 0; i < ul.children.length; i++) {
        if (ul.children[i].getAttribute("index") == itemId) {
            ul.children[i].remove();
        }
    }

}

createItemEl = function(itemValue, itemId) {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;

}

createRemoveTaskButton = function(itemId) {
    let button = document.createElement("button");
    button.setAttribute("onclick", "removeTask("+itemId+")");
    button.innerHTML ="X";
    return button;
}