<?php



if ( 0 < $_FILES['file']['error'] ) {
    echo 'Error: ' . $_FILES['file']['error'] . '<br>';
}
else {
    $tmp_name = $_FILES["file"]["tmp_name"];
    $name = "uploaded/" . $_FILES["file"]["name"];
    // $name = $_FILES["file"]["name"];
    move_uploaded_file($tmp_name, "$name");
    // $file = $_FILES["file"]["tmp_name"]
}



// if($_FILES)
// {
//     foreach ($_FILES["file"]["error"] as $key => $error) {
//         if ($error == UPLOAD_ERR_OK) {
//             $tmp_name = $_FILES["file"]["tmp_name"][$key];
//             $name = "uploaded/" . $_FILES["file"]["name"][$key];
//             move_uploaded_file($tmp_name, "$name");
//         }
//     }
//     echo("ok");
// }





$file = $name;

echo($file);

require_once('../phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $company = $_POST['company'];

$theme = $_POST['theme'];

echo $theme;

$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;                             
$mail->Username = 'connect@departmentview.ru'; 
$mail->Password = 'GKXgpdrHmcFZ1qjNKAwu';
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465; 

$mail->setFrom('connect@departmentview.ru'); 
$mail->addAddress('connect@departmentview.ru');     

$mail->isHTML(true);                                  

$mail->Subject = 'Заяка на ' .$theme;
$mail->Body    = 'тест';
$mail->AltBody = '';

$mail->addAttachment($file);

$mail->send();
