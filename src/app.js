import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function randomCardfunction() {
  let cardSymbols = ["♦", "♥", "♠", "♣"]
  let cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]


  function cardChange(){
    
 
  let randomSymbols = Math.floor(Math.random() * cardSymbols.length);
  let randomNumbers = Math.floor(Math.random() * cardNumbers.length);


  let topSymbol = document.querySelector('#upperSymbol')
  let lowerSymbol = document.querySelector('#lowerSymbol')
  let cardNumber = document.querySelector('#cardNumber')

  topSymbol.textContent = cardSymbols[randomSymbols]
  lowerSymbol.textContent = cardSymbols[randomSymbols]
  cardNumber.textContent = cardNumbers[randomNumbers]



  cardNumber.style.color = 'black'
  cardNumber.style.color = 'red'

  topSymbol.style.color = 'red'
  topSymbol.style.color = 'black'


  lowerSymbol.style.color = 'red';
  lowerSymbol.style.color = 'black'




  let cardsMix = cardSymbols[randomSymbols];

  if (cardsMix === "♦" || cardsMix === "♥") {
    topSymbol.style.color = "red";
    lowerSymbol.style.color = "red";
    cardNumber.style.color = "red";
  } else {
    topSymbol.style.color = "black";
    lowerSymbol.style.color = "black";
    cardNumber.style.color = "black";
  };
 }
 let botton = document.querySelector('#btn')
botton.addEventListener("click", ()=> {
cardChange()
})
};
 
