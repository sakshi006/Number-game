const input = document.querySelector("#text");
const btn = document.querySelector("#btn");
const outputNumber = document.querySelector("#left");
const outputRoman = document.querySelector("#right");

const serverURLn = "https://api.funtranslations.com/translate/numbers.json?text=";
const serverURLr = "https://api.funtranslations.com/translate/roman-numerals.json?text=";

function getTranslation(url, input) {
    const query = url + input;
    return fetch(query).then(response => response.json());
}

function errorHandler(error) {
    console.log("Error Occured",error);
    alert("Something is wrong with the server! Try again later")
}

function clickHandler() {
    var inputText = input.value;
    getTranslation(serverURLn, inputText).then(json => {
        var translatedText1 = json.contents.translated;
        outputNumber.innerHTML=translatedText1; //output
    }).catch(errorHandler)
    
    getTranslation(serverURLr, inputText).then(json => {
        var translatedText2 = json.contents.translated;
        outputRoman.innerHTML=translatedText2; //output
    }).catch(errorHandler)
}

btn.addEventListener("click", clickHandler);
