const saveButton = document.getElementById('save');
saveButton.addEventListener('click', saveJoke);

function saveJoke() {
    console.log("saving joke to file");
    const joke = document.getElementById('joke').innerText;

    const url = './inc/savefile.php';
    // request options
    const options = {
        method: 'POST',
        body: JSON.stringify(joke),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // send POST request
    fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .then(fetchDown("./inc/joke.txt", "joke.txt"));
}

function fetchDown (url, saveas) {
    //fetch file using GET
    fetch(url)
        //then check result for errors and return in blob if succeeded
        .then((res) => {
        if (res.status != 200) { throw new Error("Bad server response"); }
        return res.blob();
        })
        //then set the force download parameters
        .then((data) => {
        var url = window.URL.createObjectURL(data),
        anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = saveas;
        anchor.click();
        window.URL.revokeObjectURL(url);
        document.removeChild(anchor);
        })
        //catch any errors and display to console
        .catch((error) => { console.log(error); });
  }
