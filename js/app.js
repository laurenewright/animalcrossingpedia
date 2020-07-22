// fetch fish data
let fishEndpoint = 'http://acnhapi.com/v1a/fish';
const fishNames = fetch(fishEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                fishName(data);
                // fishInfo(data);
        })
// append fish names
const fishName = function appendFishName(data){
        for (var i = 0; i < data.length; i++) {
                // created button for caught or donate
                var caughtButton = document.createElement("button");
                var donateButton = document.createElement("button");
                // label caught or donate button
                caughtButton.innerHTML = "Caught";
                donateButton.innerHTML = "Donated";
                // creating and setting the attributes of the wrapperDiv
                var wrapperDiv = document.createElement("div");
                // give wrapperDiv attributes
                wrapperDiv.setAttribute("class", "fish");
                wrapperDiv.setAttribute("id", data[i].name["name-USen"]);
                // creating the nameDiv and iconDiv
                var nameDiv = document.createElement("p");
                var iconDiv = document.createElement("img");
                // giving iconDiv it's image source from api
                iconDiv.src = data[i]["icon_uri"];
                // giving nameDiv its crittername from api
                nameDiv.innerHTML = data[i].name["name-USen"];
                // setting class for nameDiv and iconDiv
                nameDiv.setAttribute("class", "critterFish");
                iconDiv.setAttribute("class", "critterFish");
                // set alt text for reader as the name of critter
                // appending name and icon to wrapperDiv
                wrapperDiv.appendChild(nameDiv);
                wrapperDiv.appendChild(iconDiv);
                wrapperDiv.appendChild(caughtButton);
                wrapperDiv.appendChild(donateButton);
                // appending wrapperDiv to fishDiv
                document.getElementById("fishDiv").appendChild(wrapperDiv);
                // wrapperDiv.onclick = function(event) {
                        // let desiredFish = event.target.parentElement;
                        // modalFish.style.display = "hide";
                        // const fishChildren = document.getElementById("fishInfo").children;
                        //console.log(document.getElementById("fishInfo").children);
                        //console.log(desiredFish);
                        //console.log(this);
                        // if(desiredFish){

                        // }
                        donateButton.onclick = function(){
                                var desiredFish = event.target.parentElement;
                                var donateDiv = document.getElementById("donatedDiv");  
                                var caughtDiv = document.getElementById("caughtDiv");  
                                var clone1 = desiredFish.cloneNode(true);
                                var clone2 = desiredFish.cloneNode(true);
                                donateDiv.appendChild(clone1);
                                caughtDiv.appendChild(clone2);
                        }
                        caughtButton.onclick = function(){
                                var desiredFish = event.target.parentElement;
                                var caughtDiv = document.getElementById("caughtDiv");  
                                var clone1 = desiredFish.cloneNode(true);
                                caughtDiv.appendChild(clone1);

                        }
                        
                // }
                // var critterFish = document.getElementsByClassName("critterFish");
                }
        }



// when fishName[id] is clicked show fishInfo[id] in modal
// each fishName needs to be clickable
// maybe use find()?

// const fishInfo = function appendFishInfo(data){
//         for (var i = 0; i < data.length; i++) {
//                 var wrapperDiv = document.createElement("div");
//                 wrapperDiv.setAttribute("class", "fish");
//                 wrapperDiv.setAttribute("id", data[i].name["name-USen"], "hide");
//                 var imgDiv = document.createElement("img");
//                 var nameDiv = document.createElement("p");
//                 var priceDiv = document.createElement("p");
//                 var phraseDiv = document.createElement("p");
//                 var caughtButton = document.createElement("button");
//                 var donateButton = document.createElement("button");
//                 imgDiv.src = data[i]["image_uri"];
//                 nameDiv.innerHTML = data[i].name["name-USen"];
//                 priceDiv.innerHTML = data[i].price;
//                 phraseDiv.innerHTML = data[i]["museum-phrase"];
//                 nameDiv.setAttribute("class", "critterInfo fish");
//                 //var caughtButton = document.createElemment("button");
//                 caughtButton.innerHTML = "Caught";
//                 donateButton.innerHTML = "Donated";
//                 //set alt text for reader as the name of critter
//                 wrapperDiv.appendChild(imgDiv);
//                 wrapperDiv.appendChild(nameDiv);
//                 wrapperDiv.appendChild(priceDiv);
//                 wrapperDiv.appendChild(phraseDiv);
//                 wrapperDiv.appendChild(caughtButton);
//                 wrapperDiv.appendChild(donateButton);
//                 document.getElementById("fishInfo").appendChild(wrapperDiv);
//         }
// }


// fetch bug data
let bugEndpoint = 'http://acnhapi.com/v1a/bugs';
const bugNames = fetch(bugEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                bugName(data);
                // appendBugInfo(data);
        })
// append bug names
const bugName = function appendBugName(data){
        for (var i = 0; i < data.length; i++) {
                // created button for caught or donate
                var caughtButton = document.createElement("button");
                caughtButton.setAttribute("id", "caughtButton");
                var donateButton = document.createElement("button");
                donateButton.setAttribute("id", "donateButton");
                // label caught or donate button
                caughtButton.innerHTML = "Caught";
                donateButton.innerHTML = "Donated";
                // creating and setting the attributes of the wrapperDiv
                var wrapperDiv = document.createElement("div");
                // give wrapperDiv attributes
                wrapperDiv.setAttribute("class", "bug");
                wrapperDiv.setAttribute("id", data[i].name["name-USen"]);
                // creating the nameDiv and iconDiv
                var nameDiv = document.createElement("p");
                var iconDiv = document.createElement("img");
                // giving iconDiv it's image source from api
                iconDiv.src = data[i]["icon_uri"];
                // giving nameDiv its crittername from api
                nameDiv.innerHTML = data[i].name["name-USen"];
                // setting class for nameDiv and iconDiv
                nameDiv.setAttribute("class", "critterBug");
                iconDiv.setAttribute("class", "critterBug");
                // set alt text for reader as the name of critter
                // appending name and icon to wrapperDiv
                wrapperDiv.appendChild(nameDiv);
                wrapperDiv.appendChild(iconDiv);
                wrapperDiv.appendChild(caughtButton);
                wrapperDiv.appendChild(donateButton);
                // appending wrapperDiv to fishDiv
                document.getElementById("bugDiv").appendChild(wrapperDiv);
                // wrapperDiv.onclick = function(event) {
                        // let desiredFish = event.target.parentElement;
                        // modalFish.style.display = "hide";
                        // const fishChildren = document.getElementById("fishInfo").children;
                        //console.log(document.getElementById("fishInfo").children);
                        //console.log(desiredFish);
                        //console.log(this);
                        // if(desiredFish){

                        // }

                        
                // }
                        donateButton.onclick = function(){
                                var desiredBug = event.target.parentElement;
                                var donateDiv = document.getElementById("donatedDiv");  
                                var caughtDiv = document.getElementById("caughtDiv");  
                                var clone1 = desiredBug.cloneNode(true);
                                var clone2 = desiredBug.cloneNode(true);
                                donateDiv.appendChild(clone1);
                                caughtDiv.appendChild(clone2);
                                desiredBug.outerHTML = "";
                                document.getElementById("caughtButton").outerHTML = "";
                        }
                        caughtButton.onclick = function(){
                                var desiredBug = event.target.parentElement;
                                var caughtDiv = document.getElementById("caughtDiv");  
                                var clone1 = desiredBug.cloneNode(true);
                                caughtDiv.appendChild(clone1);
                                document.getElementById("caughtButton").outerHTML = "";
                        }




                        // var element = document.getElementById("element-id");
                        // element.parentNode.removeChild(element);



                }
        }

        // const caught = function addCaught (data){
        //         var caughtDiv = document.getElementById("caughtDiv");
        //         var div = document.createElement("div");


        // }
// fetch and display critter info when critter is clicked
// function appendBugInfo(data){
//         for (var i = 0; i < data.length; i++) {
//                 var wrapperDiv = document.createElement("div");
//                 wrapperDiv.setAttribute("class", "bug");
//                 wrapperDiv.setAttribute("id", data[i].name["name-USen"]);
//                 var imgDiv = document.createElement("img");
//                 var nameDiv = document.createElement("p");
//                 var priceDiv = document.createElement("p");
//                 var phraseDiv = document.createElement("p");
//                 imgDiv.src = data[i]["image_uri"];
//                 nameDiv.innerHTML = data[i].name["name-USen"];
//                 priceDiv.innerHTML = data[i].price;
//                 phraseDiv.innerHTML = data[i]["museum-phrase"];
//                 nameDiv.setAttribute("class", "critterInfo bug");
//                 //set alt text for reader as the name of critter
//                 document.getElementById("bugInfo").appendChild(imgDiv);
//                 document.getElementById("bugInfo").appendChild(nameDiv);
//                 document.getElementById("bugInfo").appendChild(priceDiv);
//                 document.getElementById("bugInfo").appendChild(phraseDiv);
//                 }
//         }




// var critterBug = document.getElementsByClassName("critterBug");
// function onClickAlertBug(){
//         for (var i=0; i < critterBug.length; i++) {
//                 critterBug[i].onclick = function(){
//                         modalBug.style.display = "block";
//                         console.log(this);
//                 }
//         }
// }

// Get the modal
// var modalFish = document.getElementById("myModalFish");
// var modalBug = document.getElementById("myModalBug");

// Get the <span> element that closes the modal
//  var spanBug = document.getElementsByClassName("closeBug")[0];
//  var spanFish = document.getElementsByClassName("closeFish")[0];

// When the user clicks on the , open the modal
//  critterBug.onclick = function() {
//    modalBug.style.display = "block";
//  }

// When the user clicks on <span> (x), close the modal
//  spanBug.onclick = function() {
//    modalBug.style.display = "none";
//  }
//  spanFish.onclick = function() {
//         modalFish.style.display = "none";
//       }
     

// When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//    if (event.target == modalBug) {
//      modalBug.style.display = "none";
//    } else if (event.target == modalFish) {
//         modalFish.style.display = "none";
//       }
//  }



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