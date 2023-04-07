<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'php/Exception.php';
	require 'php/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('(Введите email, от него будет отправляться заявка)', 'Blanchard');
	//Кому отправить
	$mail->addAddress('(Введите email, туда будет прихоодить заявка)');
	//Тема письма
	$mail->Subject = 'Обратный звонок';



	$body = '<h1>Перезвони мне, пожалуйста!</h1>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.htmlspecialchars($_POST['name']).'</p>';
	}

	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Номер: </strong> '.htmlspecialchars($_POST['phone']).'</p>';
	}







	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены по пользователю '.$_POST['name']. ' - '.$_POST['phone']. '';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>
