<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$name = $_POST['name'];
$phone = $_POST['phone'];
$company = $_POST['company'];


if($name == false || $phone == false || $company == false ){
    echo("Error");
} else{
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
    
    $mail->Subject = 'Заяка с сайта';
    $mail->Body    = 'Имя: ' .$name . ' <br>Телефон: ' .$phone. '<br>Компания: ' .$company;
    $mail->AltBody = '';
    
    $mail->send();
}
                            

?>