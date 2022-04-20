fetch("https://api.kanye.rest/")
.then(reponse => reponse.json())
.then(responce2 => console.log(responce2))