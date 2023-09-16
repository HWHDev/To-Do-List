const btn = document.querySelector(".btn");
const inputField = document.querySelector(".input-field");
const tempat = document.querySelector("#tempat");

const getValue = ()=>{
    const list = document.createElement("li")
    if(inputField.value == ""){
        alert('Tidak boleh kosong')
    }else{
        tempat.appendChild(list).innerHTML = inputField.value;
        inputField.value = "";
    }
    list.addEventListener("click", ()=>{
        list.style.textDecorationLine = "line-through";
        list.style.textDecorationColor = "black";
        list.style.textDecorationThickness = "2px";
    })
    list.addEventListener("dblclick", ()=>{
        list.style.display = "none"
    })
};

btn.addEventListener("click", getValue);