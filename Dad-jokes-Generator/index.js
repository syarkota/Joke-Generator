const btnEl = document.getElementById("btn");
const jokeE1 = document.getElementById("joke")


const apiKey = "8G7xGI4Q7Yu1ckEkp+u+lw==Wcvojf1i20Bavnc2";

const options = {
    method: "GET",
    headers: {
        "X-APi-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/jokes"
async function getJoke(){

    jokeE1.innerText = "Updating!!!!"
    const response = await fetch(apiURL, options)
    const data = await response.json()


    jokeE1.innerText = data[0].joke
}

btnEl.addEventListener("click",getJoke)