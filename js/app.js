document.querySelector(".example").style.backgroundColor = "red";
// const myFunction = function myFunction() {
//     document.querySelector(".example").style.backgroundColor = "red";
//   }

  //exports myFunction = myFunction;


const fishEndpoint = 'http://acnhapi.com:1304/v1/fish';
const fishData = fetch(fishEndpoint)
        .then(response => response.json())
        .then(data => console.log(data));

const bugsEndpoint = 'http://acnhapi.com:1304/v1/bugs/';
const bugData = fetch(bugsEndpoint)
        .then(response => response.json())
        .then(data => console.log(data));
// const fishEndpoint = 'http://acnhapi.com:1304/v1/fish';
// const fishData = fetch(fishEndpoint)
//         .then(response => response.json())
//         .then(data => console.log(data));


var fishDiv = document.getElementById("fishDiv"); 
document.body.insertBefore(newDiv, currentDiv); 
}