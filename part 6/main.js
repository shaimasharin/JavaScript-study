// let curryPowder = ["salt","pepper","chilli","turmeric"];

// for(let powder of curryPowder) {
//     let li = document.createElement("li");
//     li.innerText = powder
//     console.log(li)
// }

// to show web page

let kitchenItemsList = document.getElementById("kitchen-items-list");
let curryPowder = ["salt","pepper","chilli","turmeric"];

// method=1
for (let powder of curryPowder) {
    let li = document.createElement("li");
    li.innerText = powder;
    kitchenItemsList.appendChild(li);
    console.log(li);
}