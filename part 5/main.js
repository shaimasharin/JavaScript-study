// let curryPowder = ["salt","pepper","chilli","turmeric"];



// this only for 'ONE' element from DOM to console __ document.querySelector(li)

// let li = document.querySelector("li");
// console.log(li)




// 'ALL' Elements from DOM to console __ document.querySelectorAll(li)

// let allLi = document.querySelectorAll("li");
// console.log(allLi)





// each element in each position and show in web page 

let curryPowder = ["salt","pepper","chilli","turmeric"];

let allLi = document.querySelectorAll("li");

allLi[0].innerText = curryPowder[0];
allLi[1].innerText = curryPowder[1];
allLi[2].innerText = curryPowder[2];
allLi[3].innerText = curryPowder[3];
console.log(allLi)