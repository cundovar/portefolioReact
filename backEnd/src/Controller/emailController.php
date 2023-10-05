<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class EmailController extends AbstractController{
    public function sendEmail(Request $request, MailerInterface $mailer):Response{
        $formData = $request->request->all();




        $email = (new Email())
        ->from('votre@email.com')
        ->to('destinataire@email.com')
        ->subject('Nouveau message depuis le formulaire de contact')
        ->text('Contenu du message : ' . $formData['message']);

    $mailer->send($email);

    // Répondez à la demande React
    return $this->json(['message' => 'E-mail envoyé avec succès']);

    }
}