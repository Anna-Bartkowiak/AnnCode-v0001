<?php
header("content-type: application/json; charset=utf-8");
$name=isset($_POST['name']) ? $_POST['name'] : "";
$email=isset($_POST['email']) ? $_POST['email'] : "";
$message=isset($_POST['message']) ? $_POST['message'] : "";
if($name && $email && $message){
 $headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit";
 $message_body="message from anncode.pl\n";
 $message_body.="name: $name\n";
 $message_body.="email: $email\n";
 $message_body.=$message;
 if(mail("anncodewaw@gmail.com","Message from portfolio",$message_body,$headers)){
 $json=array("status"=>1,"msg"=>"<p class='status_ok'>Your message was sent succesully</p>");
 }
 else{
 $json=array("status"=>0,"msg"=>"<p class='status_err'>Error occured while sending. Please try again</p>"); 
 }
}
else{
 $json=array("status"=>0,"msg"=>"<p class='status_err'>Please fill all fields</p>"); 
}
echo json_encode($json);
exit;
?>