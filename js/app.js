let quotesDiv = document.getElementById('quotes')

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
   console.log(quote.quote)
})

let Button = document.getElementById('give')

Button.addEventListener("click", evt => {

});