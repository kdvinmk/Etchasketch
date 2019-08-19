let griditem = document.querySelectorAll("#square");
const container = document.getElementById("container");
const squarenode = document.getElementById('#square');
const btn = document.querySelector('#btn');
let size = 16;

gridmaker();

function gridmaker(){
    let x=0;
    let numberofboxes = size*size;
    while (x<numberofboxes) {
        let square = document.createElement('div');

        square.className = "grid-item";
        square.id = "square";

        document.getElementById('container').appendChild(square);
        x++;
    }

    container.style.cssText = 
    `grid-template-columns: repeat(` + size + `, 1fr);
    grid-template-rows: repeat(` + size + `, 1fr);`
    colorevent();
}

function colorevent(){
    griditem=document.querySelectorAll("#square");
    griditem.forEach(function(q){
        q.addEventListener('mouseover', function (){
            q.classList.add('colorer');
        });
    });
}

btn.addEventListener('click', function (e) {
    console.log('clicked');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    size = prompt("Enter how many squares you'd like on both sides. (Ex. 16)");
    gridmaker();
});