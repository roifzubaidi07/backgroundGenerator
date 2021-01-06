var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.getElementById("button");
var body = document.getElementById("gradient");

function changeColor(){
    body.style.background = "linear-gradient(to right, " +color1.value +", "+ color2.value + ")";
    css.textContent = body.style.background + ";";
}

function generatecolor(){
    var randomColor1 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    var randomColor2 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    body.style.background = "linear-gradient(to right, " +randomColor1 +", "+ randomColor2 + ")";
    color1.value = randomColor1;
    color2.value = randomColor2;
    css.textContent = body.style.background + ";";
}

button.addEventListener("click", generatecolor);

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);