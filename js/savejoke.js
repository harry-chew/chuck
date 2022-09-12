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
        .then(res => console.log(res));
}

