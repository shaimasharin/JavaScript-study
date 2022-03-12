let kitchenItemsList = document.getElementById("kitchen-items-list");
let curryPowder = ["salt","pepper","chilli","turmeric"];


// method=1
// for 

// for (let powder of curryPowder) {
//     let li = document.createElement("li");
//     li.innerText = powder;
//     kitchenItemsList.appendChild(li);
//     console.log(li);
// }

// method=2
// forEach 

// curryPowder.forEach(function (powder) {
//     console.log(powder);
// });

// show in webpage

// curryPowder.forEach(function (powder) {
//     let li = document.createElement("li");
//     li.innerText = powder;
//     kitchenItemsList.appendChild(li);
//     // console.log(li);
// });

// 1. push()
// 2.pop()
// 3. shift()
// 4.unshift()

// step 1 : find all the list items here 

let allListItems = document.querySelectorAll("li");
let powderArray = [];
// console.log(allListItems);

// step 2 : iterate all list items 

allListItems.forEach(function(listItem){
    let allListItemText = listItem.innerText;
// srep 3 : push all the list item content to a new arrray
    powderArray.push(allListItemText);
});

console.log(powderArray);