// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


//1
let p = document.querySelector('p');
let btn = document.querySelector('input');

let add =(texte) =>{
    p.innerText = texte;
}

btn.addEventListener('click', function() {add(pContent)});

//2
let h1 = document.querySelector('h1');

let changeCSS =(color, bgColor) =>{
    h1.style.color = color;
    h1.style.backgroundColor = bgColor;
}

h1.addEventListener('click', function() {changeCSS(theColor, theBackground)});