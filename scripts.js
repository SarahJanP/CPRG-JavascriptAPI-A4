// Sarah Parker | 000900287
const pageTitle = document.getElementById("pageTitle");
const jokeCategory = document .getElementById("jokeCategory")
const jokeSection = document.getElementById("jokeSection");


//WHEN THE PAGE FIRST LOADS,  DO THE JOKE OF THE DAY.
window.onload = jokeOfDay();

//Button Constants
const randomPun = document.getElementById("buttonPun")
const randomMisc = document.getElementById("buttonMisc")
const randomSpooky = document.getElementById("buttonSpooky")
const randomChristmas = document.getElementById("buttonChristmas")
const randomProgram = document.getElementById("buttonProgram")

//Event Listeners

randomPun.addEventListener("click", getPun);
randomMisc.addEventListener("click", getMisc);
randomSpooky.addEventListener("click", getSpooky);
randomChristmas.addEventListener("click", getChristmas);
randomProgram.addEventListener("click", getProgram);

        
//FUNCTIONS

function jokeOfDay(){
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        pageTitle.innerText = "Joke Of The Day!"


        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a two-part joke:";
            joke.innerHTML = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a single-part joke:";
            joke.innerText = data.joke;
        }
    });
}



function getPun() {
    fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")  //Fetch a pun joke
    .then(response => response.json())
    .then(data => {
            console.log(data);
            jokeType.innerText = "Joke type: " + data.type;



        pageTitle.innerText = "A Random Pun"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a two-part pun:";
            joke.innerHTML = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a single-part pun:";
            joke.innerText = data.joke;
        }
    })
}


function getMisc() {
    fetch("https://v2.jokeapi.dev/joke/Misc?safe-mode")  //Fetch a pun joke
    .then(response => response.json())
    .then(data => {
            console.log(data);
            jokeType.innerText = "Joke type: " + data.type;

        pageTitle.innerText = "A Random Miscellaneous Joke"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a two-part miscellaneous joke:";
            joke.innerHTML = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a single-part miscellaneous joke:";
            joke.innerText = data.joke;
        }
    })
}

function getSpooky() {
    fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")  //Fetch a pun joke
    .then(response => response.json())
    .then(data => {
            console.log(data);

            jokeType.innerText = "Joke type: " + data.type;


        pageTitle.innerText = "A Random Spooky Joke"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a two-part spooky joke:";
            joke.innerHTML = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a single-part spooky joke:";
            joke.innerText = data.joke;
        }
    })
}

function getChristmas() {
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")  //Fetch a pun joke
    .then(response => response.json())
    .then(data => {
            console.log(data);

            jokeType.innerText = "Joke type: " + data.type;

        pageTitle.innerText = "A Random Christmas Joke"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a two-part Christmas joke:";
            joke.innerHTML = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a single-part Christmas joke:";
            joke.innerText = data.joke;
        }
    })
}

function getProgram() {
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")  //Fetch a pun joke
    .then(response => response.json())
    .then(data => {
            console.log(data);

            jokeType.innerText = "Joke type: " + data.type;
            

        pageTitle.innerText = "A Random Programming Joke"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a two-part programming joke:";
            joke.innerHTML = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a single-part programming joke:";
            joke.innerText = data.joke;
        }
    })
}