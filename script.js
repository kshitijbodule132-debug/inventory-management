function addItem(){

let name=document.getElementById("itemName").value;
let qty=document.getElementById("itemQty").value;

if(name=="" || qty==""){
alert("Please enter item name and quantity");
return;
}

let list=document.getElementById("itemList");

let li=document.createElement("li");

li.innerHTML=name+" - Qty: "+qty+" <button class='delete' onclick='removeItem(this)'>Delete</button>";

list.appendChild(li);

document.getElementById("itemName").value="";
document.getElementById("itemQty").value="";
}

function removeItem(button){
button.parentElement.remove();
}

function clearList(){
document.getElementById("itemList").innerHTML="";
}