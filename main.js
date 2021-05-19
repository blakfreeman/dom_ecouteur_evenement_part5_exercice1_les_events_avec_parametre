// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


//1

let btn  = document.querySelector('input');
console.log(btn);
let p = document.querySelector('p');
console.log(p);
function add (x) {
    btn.addEventListener('click',()=>{
        p.innerText = x;
    })
}


add(pContent);

//2
let h1 = document.querySelector('h1');

function color (x,y) {
   btn.addEventListener('click',()=>{
h1.style.color = x;
h1.style.backgroundColor = y;

   }) 
}

color(theColor,theBackground);


