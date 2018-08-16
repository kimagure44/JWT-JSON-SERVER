<?php

    $curl = curl_init();
    $url = "http://localhost:3000/data?".$argv[1];
    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $url,
        CURLOPT_USERAGENT => 'Codular Sample cURL Request '
    ));
    $resp = curl_exec($curl);
    echo $resp."\n";
    echo "CURL: ".$url;
    curl_close($curl);
?>