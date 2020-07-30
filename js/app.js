// const { remove } = require("local-storage");
var caughtButton = {};
// fetch fish data
let fishEndpoint = 'http://acnhapi.com/v1a/fish';
const fishNames = fetch(fishEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                fishName(data);
                fishInfo(data);
        })
// append fish names
const fishName = function appendFishName(data){
        for (var i = 0; i < data.length; i++) {
                // created button for caught or donate
                var caughtButton = document.createElement("button");
                var donateButton = document.createElement("button");
                caughtButton.setAttribute("class", "addButton");
                donateButton.setAttribute("class", "addButton");
                caughtButton.setAttribute("id", "caughtButton");
                donateButton.setAttribute("id", "donateButton");
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

                // fishInfo button shows all fish info
                document.getElementById("fishInfoButton").onclick = function() {
                        modalFish.style.display = "block";
                        }

                // add event listener to donateButton
                donateButton.addEventListener('click', function(event){
                        // desired fish pinpoints which div to be cloned
                        var desiredFish = event.target.parentElement;
                        // variable for cloning the node 
                        var clone = desiredFish.cloneNode(true);
                        clone.id = "donated";
                        // if donate button is clicked
                        if(donateButton){
                                // append a clone of desired fish to the donatedDiv
                                donatedDiv.appendChild(clone);
                                // remove the donate button
                                this.remove();
                                // needing to loop through buttons?
                                // var button = document.getElementById("donatedCount"),
                                // count = 0;
                                // count += 1;
                                // button.innerHTML = "Donated " + count + "/80";
                                // console.log(donatedDiv);
                        // log error if this does not work
                        } else console.log("error");
                })

                // add event listener to caughtButton
                        caughtButton.addEventListener('click', function(event){
                                // desired fish pinpoints which div to be cloned
                        var desiredFish = event.target.parentElement;
                        // variable for cloning the node 
                        var clone = desiredFish.cloneNode(true);
                        clone.id = "caught";
                        // if donate button is clicked
                        if(caughtButton){
                                // append a clone of desired fish to the caughtDiv
                                caughtDiv.appendChild(clone);
                                // re move the donate button
                                this.remove();
                                // needing to loop through buttons?
                                // var button = document.getElementById("caughtCount"),
                                // count = 0;
                                // count += 1;
                                // button.innerHTML = "Caught " + count + "/80";
                        // log error if this does not work
                        } else console.log("error");
                        })

        }
}



const fishInfo = function appendFishInfo(data){
        for (var i = 0; i < data.length; i++) {
                var wrapperDiv = document.createElement("div");
                wrapperDiv.setAttribute("class", "fish");
                wrapperDiv.setAttribute("id", data[i].name["name-USen"], "hide");
                var imgDiv = document.createElement("img");
                var nameDiv = document.createElement("p");
                var priceDiv = document.createElement("p");
                var phraseDiv = document.createElement("p");
                imgDiv.src = data[i]["image_uri"];
                nameDiv.innerHTML = data[i].name["name-USen"];
                priceDiv.innerHTML = data[i].price;
                phraseDiv.innerHTML = data[i]["museum-phrase"];
                nameDiv.setAttribute("class", "critterInfo fish");
                //var caughtButton = document.createElemment("button");
                caughtButton.innerHTML = "Caught";
                donateButton.innerHTML = "Donated";
                //set alt text for reader as the name of critter
                wrapperDiv.appendChild(imgDiv);
                wrapperDiv.appendChild(nameDiv);
                wrapperDiv.appendChild(priceDiv);
                wrapperDiv.appendChild(phraseDiv);
                document.getElementById("fishInfo").appendChild(wrapperDiv);
        }
}



// fetch bug data
let bugEndpoint = 'http://acnhapi.com/v1a/bugs';
const bugNames = fetch(bugEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                bugName(data);
                bugInfo(data);
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

                // bugInfo button shows all fish info
                document.getElementById("bugInfoButton").onclick = function() {
                        modalBug.style.display = "block";
                        }

                // add event listener to donateButton
                donateButton.addEventListener('click', function(event){
                        // desired fish pinpoints which div to be cloned
                        var desiredBug = event.target.parentElement;
                        // variable for cloning the node 
                        var clone = desiredBug.cloneNode(true);
                        clone.id = "donated";
                        // if donate button is clicked
                        if(donateButton){
                                // append a clone of desired fish to the donatedDiv
                                donatedDiv.appendChild(clone);
                                // remove the donate button
                                this.remove();
                                // needing to loop through buttons?
                                // var button = document.getElementById("donatedCount"),
                                // count = 0;
                                // count += 1;
                                // button.innerHTML = "Donated " + count + "/80";
                                // console.log(donatedDiv);
                        // log error if this does not work
                        } else console.log("error");
                })

                // add event listener to caughtButton
                        caughtButton.addEventListener('click', function(event){
                                // desired fish pinpoints which div to be cloned
                        var desiredBug = event.target.parentElement;
                        // variable for cloning the node 
                        var clone = desiredBug.cloneNode(true);
                        // if donate button is clicked
                        if(caughtButton){
                                // append a clone of desired fish to the caughtDiv
                                caughtDiv.appendChild(clone);
                                clone.id = "caught";
                                // re move the donate button
                                this.remove();
                                // needing to loop through buttons?
                                // var button = document.getElementById("caughtCount"),
                                // count = 0;
                                // count += 1;
                                // button.innerHTML = "Caught " + count + "/80";
                        // log error if this does not work
                        } else console.log("error");
                        })
        }
}


// fetch and display critter info when critter is clicked
const bugInfo = function appendBugInfo(data){
        for (var i = 0; i < data.length; i++) {
                var wrapperDiv = document.createElement("div");
                wrapperDiv.setAttribute("class", "bug");
                wrapperDiv.setAttribute("id", data[i].name["name-USen"]);
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

        saveCaught.addEventListener('click', () => {
                var textToSave = document.getElementById("caught").querySelectorAll("p")[0].innerHTML;
                console.log(textToSave);
                var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
                var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
                var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
             
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "Download File";
                downloadLink.href = textToSaveAsURL;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
             
                downloadLink.click();
            })

        saveDonated.addEventListener('click', () => {
                var textToSave = document.getElementById("donated").querySelectorAll("p")[0].innerHTML;
                console.log(textToSave);
                var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
                var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
                var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
             
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "Download File";
                downloadLink.href = textToSaveAsURL;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
             
                downloadLink.click();
            })

// Get the modal
var modalFish = document.getElementById("myModalFish");
var modalBug = document.getElementById("myModalBug");

// Get the <span> element that closes the modal
 var spanBug = document.getElementsByClassName("closeBug")[0];
 var spanFish = document.getElementsByClassName("closeFish")[0];

// When the user clicks on the , open the modal
var critterBug = document.getElementsByClassName("bugInfoButton");
 critterBug.onclick = function() {
   modalBug.style.display = "block";
 }
var critterFish = document.getElementsByClassName("fishInfoButton");
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

      // user can download a copy of their donated and caught critters 
