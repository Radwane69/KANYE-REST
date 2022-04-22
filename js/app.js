function getQuote() {
    let kanye = new XMLHttpRequest();
    kanye.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let kanyeQuote = JSON.parse(this.responseText);
            document.getElementById("kanye-quote").innerHTML = kanyeQuote.quote;
        } else if(this.readyState != 4) {
              document.getElementById("kanye-quote").innerHTML = "Loading...";
        } else {
              document.getElementById("kanye-quote").innerHTML = "Something went wrong..."
        }
    };
  
    kanye.open("GET", "https://api.kanye.rest/", true);
    kanye.send();
  
  };
  
  document.getElementById("refresh").addEventListener("click", getQuote);
  document.getElementById("refresh").addEventListener("click", kanyeSound);