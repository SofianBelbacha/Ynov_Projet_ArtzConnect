<?php

namespace App\Controller\InterfaceUser;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/interface_user/main')]
class MainController extends AbstractController
{
    #[Route('', name: 'app_interface_user_main_index')]
    public function index(): Response
    {
        return $this->render('interface_user/main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
}
