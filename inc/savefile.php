<?php 
if(file_get_contents('php://input')) {
    //clean up headers and such
    ob_clean();
    header_remove(); 

    //add headers and correct response type
    header('Content-Type: application/json');
    http_response_code(200);

    //get contents from input stream
    $joke = file_get_contents('php://input');

    //write contents to file
    $jokeFile = fopen("joke.txt", "w");
    fwrite($jokeFile, $joke);

    //format response to json for front end
    json_encode($joke);
    echo $joke;

    //force exit just incase
    exit();
}
