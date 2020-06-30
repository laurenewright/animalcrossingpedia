// fetch fish data
let fishEndpoint = 'http://acnhapi.com/v1a/fish';
const fishNames = fetch(fishEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendFishName(data);
                appendFishInfo(data);
        })
// append fish names
function appendFishName(data){
        for (var i = 0; i < data.length; i++) {
                var div = document.createElement("p");
                var iconDiv = document.createElement("img");
                iconDiv.src = data[i]["icon_uri"];
                div.innerHTML = data[i].name["name-USen"];
                div.setAttribute("class", "critterFish");
                iconDiv.setAttribute("class", "critterFish");
                //set alt text for reader as the name of critter
                document.getElementById("fishDiv").appendChild(div);
                document.getElementById("fishDiv").appendChild(iconDiv);
                }
        }

function appendFishInfo(data){
        for (var i = 0; i < data.length; i++) {
                var imgDiv = document.createElement("img");
                var nameDiv = document.createElement("p");
                var priceDiv = document.createElement("p");
                var phraseDiv = document.createElement("p");
                imgDiv.src = data[i]["image_uri"];
                nameDiv.innerHTML = data[i].name["name-USen"];
                priceDiv.innerHTML = data[i].price;
                phraseDiv.innerHTML = data[i]["museum-phrase"];
                nameDiv.setAttribute("class", "critterInfo fish");
                //set alt text for reader as the name of critter
                document.getElementById("fishInfo").appendChild(imgDiv);
                document.getElementById("fishInfo").appendChild(nameDiv);
                document.getElementById("fishInfo").appendChild(priceDiv);
                document.getElementById("fishInfo").appendChild(phraseDiv);
        }
}



// fetch bug data
let bugEndpoint = 'http://acnhapi.com/v1a/bugs';
const bugNames = fetch(bugEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendBugName(data);
                appendBugInfo(data);
        })
// append bug names
function appendBugName(data){
        for (var i = 0; i < data.length; i++) {
                var iconDiv = document.createElement("img");
                iconDiv.src = data[i]["icon_uri"];
                var div = document.createElement("p");
                div.innerHTML = data[i].name["name-USen"];
                div.setAttribute("class", "critterBug");
                iconDiv.setAttribute("class", "critterBug");
                //set alt text for reader as the name of critter
                document.getElementById("bugDiv").appendChild(div);
                document.getElementById("bugDiv").appendChild(iconDiv);
                }
        }

// fetch and display critter info when critter is clicked
function appendBugInfo(data){
        for (var i = 0; i < data.length; i++) {
                var imgDiv = document.createElement("img");
                var nameDiv = document.createElement("p");
                var priceDiv = document.createElement("p");
                var phraseDiv = document.createElement("p");
                imgDiv.src = data[i]["image_uri"];
                nameDiv.innerHTML = data[i].name["name-USen"];
                priceDiv.innerHTML = data[i].price;
                phraseDiv.innerHTML = data[i]["museum-phrase"];
                nameDiv.setAttribute("class", "critterInfo bug");
                //set alt text for reader as the name of critter
                document.getElementById("bugInfo").appendChild(imgDiv);
                document.getElementById("bugInfo").appendChild(nameDiv);
                document.getElementById("bugInfo").appendChild(priceDiv);
                document.getElementById("bugInfo").appendChild(phraseDiv);
                }
        }




// display modal when critter is clicked
var critterFish = document.getElementsByClassName("critterFish");
function onClickAlertFish(){
        for (var i=0; i < critterFish.length; i++) {
                critterFish[i].onclick = function(){
                        modalFish.style.display = "block";
                }
        }
}

var critterBug = document.getElementsByClassName("critterBug");
function onClickAlertBug(){
        for (var i=0; i < critterBug.length; i++) {
                critterBug[i].onclick = function(){
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

// When the user clicks on the , open the modal
 critterBug.onclick = function() {
   modalBug.style.display = "block";
 }

 critterFish.onclick = function() {
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



// tabbed content
 function openPage(pageName, element, color) {
        // Hide all elements with class="tabcontent" by default */
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
      
        // Show the specific tab content
        document.getElementById(pageName).style.display = "block";
      
        // Add the specific color to the button used to open the tab content
        element.style.backgroundColor = color;
      }
      
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();