const form = document.querySelector("#form")
const nameinput = document.querySelector("#formName")
const emailinput = document.querySelector("#formGroupExampleInput")

form.addEventListener("Submit", (event) => {
    event.preventDefault();

    if (nameinput.value === "") {
        alert("Please, fill your name")
        return;
    }
})

let cont =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    cont++;
    if(cont>4){
        cont =1;
    }
    document.getElementById("radio"+cont).checked = true;
}