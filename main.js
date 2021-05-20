//Combiner Functions avec plusieurs params aux eventsListeners

// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

//Ex1
let p = document.querySelector('p');
let btn = document.querySelector('input');

function test(params) {
    return p.innerText = params
}

btn.addEventListener('click',function (){test(pContent)})

//Ex2
let h1 = document.querySelector('h1');

function test2(par1,par2) {
    h1.style.backgroundColor = par1; 
    h1.style.color = par2;
}

h1.addEventListener('click',function(){test2(theBackground,theColor)})