// fetch fish data


let fishEndpoint = 'http://acnhapi.com/v1a/fish';
const fishData = fetch(fishEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendFish(data);
        })

function appendFish(data){
        for (var i = 0; i < data.length; i++) {
                // append each person to our page
                var div = document.createElement("div");
                div.innerHTML = data[i].name["name-USen"];
                document.getElementById("fishDiv").appendChild(div);
                }
        }

let bugEndpoint = 'http://acnhapi.com/v1a/bugs';
const bugData = fetch(bugEndpoint)
        .then(response => response.json())
        .then((data) => {
                console.log(data);
                appendBug(data);
        })

function appendBug(data){
        for (var i = 0; i < data.length; i++) {
                // append each person to our page
                var div = document.createElement("div");
                div.innerHTML = data[i].name["name-USen"];
                document.getElementById("bugDiv").appendChild(div);
                }
        }