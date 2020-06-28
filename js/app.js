// fetch fish data
let fishEndpoint = 'http://acnhapi.com/v1a/fish';
const fishNames = fetch(fishEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendFishName(data);
                appendFishInfo(data);
        })
// append names
function appendFishName(data){
        for (var i = 0; i < data.length; i++) {
                var div = document.createElement("button");
                div.innerHTML = data[i].name["name-USen"];
                div.setAttribute("class", "critterButtonFish");
                //set alt text for reader as the name of critter
                document.getElementById("fishDiv").appendChild(div);
                }
        }

function appendFishInfo(data){
        for (var i = 0; i < data.length; i++) {
                var div1 = document.createElement("p");
                var div2 = document.createElement("p");
                var div3 = document.createElement("p");
                div1.innerHTML = data[i].name["name-USen"];
                div2.innerHTML = data[i].price;
                div3.innerHTML = data[i]["museum-phrase"];
                div1.setAttribute("class", "critterInfo fish");
                //set alt text for reader as the name of critter
                document.getElementById("fishInfo").appendChild(div1);
                document.getElementById("fishInfo").appendChild(div2);
                document.getElementById("fishInfo").appendChild(div3);
        }
}

//fetch bug data
let bugEndpoint = 'http://acnhapi.com/v1a/bugs';
const bugNames = fetch(bugEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendBugName(data);
                appendBugInfo(data);
        })
//append names
function appendBugName(data){
        for (var i = 0; i < data.length; i++) {
                var div = document.createElement("button");
                div.innerHTML = data[i].name["name-USen"];
                div.setAttribute("class", "critterButtonBug");
                //set alt text for reader as the name of critter
                document.getElementById("bugDiv").appendChild(div);
                }
        }
//append bug imgs from bugData
//append fish imgs from fishData

//fetch and display critter info when critterButton is clicked
function appendBugInfo(data){
        for (var i = 0; i < data.length; i++) {
                var div1 = document.createElement("p");
                var div2 = document.createElement("p");
                var div3 = document.createElement("p");
                div1.innerHTML = data[i].name["name-USen"];
                div2.innerHTML = data[i].price;
                div3.innerHTML = data[i]["museum-phrase"];
                div1.setAttribute("class", "critterInfo bug");
                //set alt text for reader as the name of critter
                document.getElementById("bugInfo").appendChild(div1);
                document.getElementById("bugInfo").appendChild(div2);
                document.getElementById("bugInfo").appendChild(div3);
                }
        }




//display modal when critterButton is clicked
var critterButtonFish = document.getElementsByClassName("critterButtonFish");
function onClickAlertFish(){
        for (var i=0; i < critterButtonFish.length; i++) {
                critterButtonFish[i].onclick = function(){
                        modalFish.style.display = "block";
                }
        }
}

var critterButtonBug = document.getElementsByClassName("critterButtonBug");
function onClickAlertBug(){
        for (var i=0; i < critterButtonBug.length; i++) {
                critterButtonBug[i].onclick = function(){
                        modalBug.style.display = "block";
                }
        }
}

// Get the modal
var modalFish = document.getElementById("myModalFish");
var modalBug = document.getElementById("myModalBug");

// Get the <span> element that closes the modal
 var spanBug = document.getElementsByClassName("closeBug")[0];
 var spanFish = document.getElementsByClassName("closeFish")[0];

// When the user clicks on the button, open the modal
 critterButtonBug.onclick = function() {
   modalBug.style.display = "block";
 }

 critterButtonFish.onclick = function() {
        modalFish.style.display = "block";
      }

// When the user clicks on <span> (x), close the modal
 spanBug.onclick = function() {
   modalBug.style.display = "none";
 }
 spanFish.onclick = function() {
        modalFish.style.display = "none";
      }
     

// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modalBug) {
     modalBug.style.display = "none";
   } else if (event.target == modalFish) {
        modalFish.style.display = "none";
      }
 }
