// fetch fish data


let fishEndpoint = 'http://acnhapi.com/v1a/fish';
const fishData = fetch(fishEndpoint)
        .then(response => response.json())
        .then(data => console.log(data));

// fish.forEach(fish => {
//         console.log(fishData)
// });

// Object.keys(fishData).forEach(function (key){
//         console.log(fishData[key]);
//     });

// const fish = document.getElementById("fishDiv");
// fish.append(fishData);      

// document.getElementById("fishDiv".innerHTML = 'Name: ' + fishData);
function appendFish(data){
        for (var i = 0; i < data.length; i++) {
                // append each person to our page
                var div = document.createElement();
                div.innerHTML = data[i];
                document.getElementById("#fishDiv").appendChild(data);
                }
        }

// for (var i=0; i<fishData.length; i++) {
//         document.querySelectorAll('#fishDiv')[i].innerHTML = fishData[i];
//       }

//fetch bug data
// const bugsEndpoint = 'http://acnhapi.com/v1a/bugs';
// const bugData = fetch(bugsEndpoint)
//         .then(response => response.json())
//         .then(data => console.log(data));