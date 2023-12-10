const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("Joke");

const apiKey = "QmtLSUe4WVksLxJxDNqN0g==Tpsr3QeZ80vED2P9";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {


    try {

        jokeEL.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeEL.innerText = data[0].joke; 
        
    } catch (error) {

        jokeEL.innerText = "An error happend, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }

    
}

btnEl.addEventListener("click", getJoke);