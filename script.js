const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConvert = document.querySelector(".currency-value-convert")  //valor em real
    const currencyValueConverted = document.querySelector(".currency-value")   //Outras moerdas

    console.log(currencySelect.value)
    const dolarToday = 4.73
    const euroToday = 5.22

 inputCurrencyValue / dolarToday

    if(currencySelect.value == "dolar"){ // SE o select estiver selecionado, o valor de dolar entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format( inputCurrencyValue / dolarToday)

    }
    if(currencySelect.value == "euro"){  // SE o select estiver selecionado, o valor de euro entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday )

    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL" 

    }).format(inputCurrencyValue) }


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".logo-usa")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src="./assets/dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src="./assets/euro.png"
    }
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) 