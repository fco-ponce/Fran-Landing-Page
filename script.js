// Texto animado

const text = "ASIR • Apple Specialist • Gamer • Airsoft";

const typing = document.getElementById("typing");

let i = 0;

function write(){

if(i < text.length){

typing.textContent += text.charAt(i);

i++;

setTimeout(write,45);

}

}

write();


// Tema claro / oscuro

const button = document.getElementById("themeButton");

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light");

button.textContent="☀️";

}

button.addEventListener("click",()=>{

document.body.classList.toggle("light");

const light=document.body.classList.contains("light");

localStorage.setItem("theme",light?"light":"dark");

button.textContent=light?"☀️":"🌙";

});