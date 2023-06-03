
let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count +=1 ;
    countEl.textContent = count; //countEl.innerText = count; also works, but textContent is a better chioce
    

}

function save() {
    let add = count + " - ";
    saveEl.textContent += add;
    count = 0;
    countEl.textContent = count;
    console.log(count);
}