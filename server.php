<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $block = $_POST['house-block'];
    $flat = $_POST['flat'];
    $floor = $_POST['floor'];
    $pay = $_POST['pay-option'];
    $message = $_POST['message'];

    $disturb = $_POST['dont-disturb']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' .  $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Номер дома: ' .  $house . '</li>
            <li>Корпус: ' .  $block . '</li>
            <li>Квартира: ' . $flat . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Комментарий к заказу: ' . $message . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('imas.spb@mail.ru', 'Заказ', $mail_message, $headers);

    // $data = [];

    // if ($mail) {
    //     $data['status'] = "OK";
    //     $data['mes'] = "Письмо успешно отправлено";
    // }else{
    //     $data['status'] = "NO";
    //     $data['mes'] = "На сервере произошла ошибка";
    // }

    // echo json_encode($data);

    if($mail) {
        echo 'done';
    }else{
        echo 'error';
    }

?>