<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP-Server-Konfiguration für IONOS
        $mail->isSMTP();
        $mail->Host = 'smtp.domain.de'; // SMTP-Server von IONOS
        $mail->SMTPAuth = true; // Authentifizierung aktivieren
        $mail->Username = 'deinemail@domain.de'; // Deine vollständige E-Mail-Adresse
        $mail->Password = 'deinpassworthier'; // Dein E-Mail-Passwort
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Verbindungstyp SSL/TLS
        $mail->Port = 465; // SMTP-Port für SSL

        // Absender und Empfänger
        $mail->setFrom('deinemail@domain.de', 'Volt-Guard Kontaktformular'); // Absenderadresse
        $mail->addAddress('deinemail@domain.de'); // Empfängeradresse

        // E-Mail-Inhalt
        $mail->isHTML(true);
        $mail->Subject = 'Neue Kontaktformular-Anfrage';
        $mail->Body = "
            <h3>Neue Anfrage über das Kontaktformular</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>E-Mail:</strong> $email</p>
            <p><strong>Telefon:</strong> $phone</p>
            <p><strong>Nachricht:</strong></p>
            <p>$message</p>
        ";

        $mail->AltBody = "Name: $name\nE-Mail: $email\nTelefon: $phone\nNachricht: $message";

        // E-Mail senden
        $mail->send();
        echo 'Nachricht wurde erfolgreich gesendet.';
    } catch (Exception $e) {
        http_response_code(500); // Fehlerstatus senden
        echo "Nachricht konnte nicht gesendet werden. Fehler: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405); // Methode nicht erlaubt
    echo 'Ungültige Anfrage.';
}
