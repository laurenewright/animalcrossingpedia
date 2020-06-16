// fetch fish data
let fishEndpoint = 'http://acnhapi.com/v1a/fish';
const fishNames = fetch(fishEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendFishName(data);
        })
// append names
function appendFishName(data){
        for (var i = 0; i < data.length; i++) {
                var div = document.createElement("button");
                div.innerHTML = data[i].name["name-USen"];
                div.setAttribute("class", "critterButton");
                //set alt text for reader as the name of critter
                document.getElementById("fishDiv").appendChild(div);
                }
        }


//fetch bug data
let bugEndpoint = 'http://acnhapi.com/v1a/bugs';
const bugNames = fetch(bugEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendBugName(data);
        })
//append names
function appendBugName(data){
        for (var i = 0; i < data.length; i++) {
                var div = document.createElement("button");
                div.innerHTML = data[i].name["name-USen"];
                div.setAttribute("class", "critterButton");
                //set alt text for reader as the name of critter
                document.getElementById("bugDiv").appendChild(div);
                }
        }

//append bug imgs from bugData
//append fish imgs from fishData

//display info when critterButton is clicked

const critterButton = document.getElementsByClassName("critterButton");

for (var i = 0 ; i < critterButton.length; i++) {
        critterButton[i].addEventListener('click' , console.log("hello"))
     }