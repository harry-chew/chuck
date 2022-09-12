const jokeButton = document.getElementById("button")
const jokeText = document.getElementById("joke")

jokeButton.onmousedown = function() {
  jokeButton.className = "m-10 shadowed"
}
jokeButton.onmouseup = function() {
  jokeButton.className = "m-10"
}
const xhr = new XMLHttpRequest()
getNewJoke()

function getNewJoke() {
  xhr.open("GET", "https://api.chucknorris.io/jokes/random")
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send()
  //triggered when the response is completed
  xhr.onload = function() {
    if (xhr.status === 200) {
      data = JSON.parse(xhr.responseText)
      let joke = '"' + data.value + '"' + ' - Chuck Norris'
      jokeText.innerHTML = data.value
    } else if (xhr.status === 404) {
      console.log("No records found")
    }
  }
}
