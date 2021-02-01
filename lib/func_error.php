
<?php
define("ERROR",0);
define("SUCCESS",1);

function displayMessage($message,$type = SUCCESS){
    $message = strip_tags(base64_decode($message));
    if($message){
        $id = $type === ERROR ? "error" : "success";
        echo '<div id="' . $id . '">' . $message . '</div>';
    }
}
?>