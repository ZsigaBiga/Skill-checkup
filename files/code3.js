'use strict'

function input() {
    if (document.getElementById("input-gomb").childElementCount > 0){
        alert("Nem >:(");
    }
    else {

    let input = document.createElement('input');
    let inditB = document.createElement('button');
    let torolB = document.createElement('button');

    input.setAttribute("id", "inputField");
    input.setAttribute("type", "number");
    input.setAttribute("style", "border-radius: 5px;", "margin: 1rem;");

    inditB.setAttribute("id", "indulGomb");
    inditB.setAttribute("onclick", "indit()");
    inditB.setAttribute("style", "margin: 1.5rem;");
    inditB.innerHTML = "INDÍTSD";

    torolB.setAttribute("id", "torolGomb");
    torolB.setAttribute("onclick", "torles()");
    torolB.setAttribute("style", "margin: 1.5rem;");
    torolB.innerHTML = "TÖRLÉS";

    document.getElementById('input-gomb').appendChild(input);
    document.getElementById('input-gomb').appendChild(inditB);
    document.getElementById('input-gomb').appendChild(torolB);
    }

}

function indit() {
    document.getElementById('megold').innerHTML = "";
    let szam = document.getElementById("inputField").value;
    let list = document.createElement('li');

    for(let i = 0; i < 10; i++){
    szam = +szam + 3;
    let list = document.createElement('li');
    list.appendChild(document.createTextNode(szam));

    if (+szam % 2 == 0){
        list.setAttribute("style", "color: green;");
    }else {
        list.setAttribute("style", "color: red;");
    }
    document.getElementById('megold').appendChild(list);
    }
}

function torles(){
    let parent = document.getElementById("input-gomb");
    let listP = document.getElementById("megold");

    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }

    while (listP.firstChild) {
        listP.removeChild(listP.lastChild);
    }


}