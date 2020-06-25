// fetch fish data
let fishEndpoint = 'http://acnhapi.com/v1a/fish';
const fishNames = fetch(fishEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendFishName(data);
                //appendFishInfo(data);
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
                appendBugInfo(data);
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

//fetch and display critter info when critterButton is clicked
function appendBugInfo(data){
        for (var i = 0; i < data.length; i++) {
                var div = document.createElement("p");
                document.getElementById("bugInfo").innerHTML = data[i].name["name-USen"];
                div.setAttribute("class", "critterInfo");
                //set alt text for reader as the name of critter
                document.getElementById("bugInfo").appendChild(div);
                }
        }


// function appendFishInfo(data){
//         for (var i = 0; i < data.length; i++) {
//                 var div = document.createElement("div");
//                 div.innerHTML = data[i]["museum-name"];
//                 div.setAttribute("class", "critterInfo");
//                 //set alt text for reader as the name of critter
//                 document.getElementById("fishInfo").appendChild(div);
//                 }
//         }

        // function myFunction(data) {
        //         document.getElementById("bugInfo").innerHTML = data[i]["name-USen";
        //     }


//display model when critterButton is clicked
var critterButton = document.getElementsByClassName("critterButton");
function onClickAlert(){
        for (var i=0; i < critterButton.length; i++) {
                critterButton[i].onclick = function(){
                        modal.style.display = "block";
                }
        }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
 var btn = document.getElementsByClassName("critterButton");

// Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
 btn.onclick = function() {
   modal.style.display = "block";
 }

// When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }

// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }



