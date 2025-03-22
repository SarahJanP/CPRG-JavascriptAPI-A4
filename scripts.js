// Sarah Parker | 000900287



//FUNCTIONS


function jokeOfDay() {
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
.then(response => response.json())
.then(data => {
        console.log(data);

        //IF ITS A TWO PART PUN SAY HERES A TWO PART PUN
        if ((data.type == "twopart") && (data.category == "Pun") ){
            jokeType.innerText = "Here's a Two-Part Pun:";
            joke.innerText = data.setup + " ... " + data.delivery;
        }
        //IF ITS A SINGLE PART PUN SAY HERES A SINGLE PART PUN
        else if ((data.type == "single") && (data.category == "Pun") ){

            jokeType.innerText = "Here's a Single-Part Pun:";
            joke.innerText = data.joke;
        }
        
        
        else if ((data.type == "twopart")){

            jokeType.innerText = "Here's A Two-Part " + data.category + " Joke:";
            joke.innerText = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a Single-Part " + data.category + " Joke:";
            joke.innerText = data.joke;
        }
    })
    .catch(error => console.error(error));
}




function getPun() {
    fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")  //Fetch a pun
    .then(response => response.json())
    .then(data => {
        console.log(data);
        jokeType.innerText = "Joke type: " + data.type;

        pageTitle.innerText = "A Random Pun"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a Two-Part Pun:";
            joke.innerText = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a Single-Part Pun:";
            joke.innerText = data.joke;
        }
    })
    .catch(error => console.error(error));
}


function getMisc() {
    fetch("https://v2.jokeapi.dev/joke/Misc?safe-mode")  //Fetch a Misc
    .then(response => response.json())
    .then(data => {
        console.log(data);
        jokeType.innerText = "Joke type: " + data.type;

        pageTitle.innerText = "A Random Miscellaneous Joke"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a Two-Part Miscellaneous Joke:";
            joke.innerText = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a Single-Part Miscellaneous Joke:";
            joke.innerText = data.joke;
        }
    })
    .catch(error => console.error(error));
}

function getSpooky() {
    fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")  //Fetch a spooky joke
    .then(response => response.json())
    .then(data => {
        console.log(data);
        jokeType.innerText = "Joke type: " + data.type;


        pageTitle.innerText = "A Random Spooky Joke"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a Two-Part Spooky Joke:";
            joke.innerText = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a Single-Part Spooky Joke:";
            joke.innerText = data.joke;
        }
    })
    .catch(error => console.error(error));
}

function getChristmas() {
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")  //Fetch a christmas joke
    .then(response => response.json())
    .then(data => {
        console.log(data);
        jokeType.innerText = "Joke type: " + data.type;
        pageTitle.innerText = "A Random Christmas Joke"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a Two-Part Christmas Joke:";
            joke.innerText = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a Single-Part Christmas Joke:";
            joke.innerText = data.joke;
        }
    })
    .catch(error => console.error(error));
}

function getProgram() {
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")  //Fetch a programming joke
    .then(response => response.json())
    .then(data => {
        console.log(data);

        jokeType.innerText = "Joke type: " + data.type;
        pageTitle.innerText = "A Random Programming Joke"; 

        if (data.type == "twopart" ){
            //Print the type of joke
            jokeType.innerText = "Here's a Two-Part Programming Joke:";
            joke.innerText = data.setup + " ... " + data.delivery;
        }

        else{
            jokeType.innerText = "Here's a Single-Part Programming Joke:";
            joke.innerText = data.joke;
        }
    })
    .catch(error => console.error(error));
}

//WHEN THE PAGE FIRST LOADS,  DO THE JOKE OF THE DAY.
window.onload = jokeOfDay;

//Event Listeners

buttonPun.addEventListener("click", getPun);
buttonMisc.addEventListener("click", getMisc);
buttonSpooky.addEventListener("click", getSpooky);
buttonChristmas.addEventListener("click", getChristmas);
buttonProgram.addEventListener("click", getProgram);


