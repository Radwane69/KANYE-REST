let quotesDiv = document.getElementById('quotes')

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
})

let Button = document.getElementById('give')

Button.addEventListener("click", evt => {



})
