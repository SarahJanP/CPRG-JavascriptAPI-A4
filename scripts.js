//make sure u use SAFE jokes 

//const initialization for necessary elements.
const allData = document.getElementById("allData");
const pageTitle = document.getElementById("pageTitle");
const jokeType = document.getElementById("jokeType");
const jokeSetup = document.getElementById("jokeSetup");
const jokeDelivery = document.getElementById("jokeDelivery");
const twoPartBool = document.getElementById("twoPartBool");
const jokeCategory = document .getElementById("jokeCategory")

fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(response => response.json())
    .then(data => {
            console.log(data);
                //Print the type of joke
            jokeType.innerText = "Joke type: " + data.type;

                //Print the joke category
            jokeCategory.innerText = "Joke category: " + data.category;
        if (data.type == "twopart" ){
            jokeSetup.innerText = data.setup;
            twoPartBool.innerHTML = "<p> ... </p>"
            jokeDelivery.innerText=data.delivery;
        }

        if (data.type == "single"){
            jokeSetup.innerText = data.joke;
        }
    
});

