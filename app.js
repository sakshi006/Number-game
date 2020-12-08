var input = document.querySelector("#text");
var btn = document.querySelector("#btn");
var outputNumber = document.querySelector("#left");
var outputRoman = document.querySelector("#right");

// btn.addEventListener("click", function(){
//     console.log("hey");
// })

var serverURLn ="https://api.funtranslations.com/translate/numbers.json";
var serverURLr ="https://api.funtranslations.com/translate/roman-numerals.json";
function getTranslation1(input){
    return serverURLn + "?" + "text=" + input
  }

function getTranslation2(input){
    return serverURLr + "?" + "text=" + input
  }
function errorHandler(error){
    console.log("Error Occured",error);
    alert("Something is wrong with the server! Try again later")
}
function clickHandler(){
    var inputText=input.value;
    fetch(getTranslation1(inputText))
        .then(response => response.json())
        .then(json => {
          var translatedText1 = json.contents.translated;
          outputNumber.innerHTML=translatedText1; //output
        })
    fetch(getTranslation2(inputText))
        .then(response => response.json())
        .then(json => {
          var translatedText2 = json.contents.translated;
          outputRoman.innerHTML=translatedText2; //output
        })
        .catch(errorHandler)
}

btn.addEventListener("click", clickHandler);