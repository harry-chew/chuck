<?php 

if(file_get_contents('php://input')) {
    ob_clean();
    header_remove(); 
    
    header('Content-Type: application/json');
    http_response_code(200);
    $joke = file_get_contents('php://input');
    
    //$joke = RemoveSpecialChar($joke);
    $jokeFile = fopen("joke.txt", "w");
    fwrite($jokeFile, $joke);
    json_encode($joke);
    echo $joke;
    exit();
}


function RemoveSpecialChar($str){
 
    // Using preg_replace() function
    // to replace the word
    $res = preg_replace('\/[^a-zA-Z0-9_ -]/s','', $str);

    // Returning the result
    return $res;
}