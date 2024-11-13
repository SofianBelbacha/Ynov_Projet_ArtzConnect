<?php

namespace App\Controller\InterfaceUser;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/interface_user/main')]
class MainController extends AbstractController
{
    #[IsGranted('IS_AUTHENTICATED')]
    #[Route('', name: 'app_interface_user_main_index')]
    public function index(): Response
    {
        return $this->render('interface_user/main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
}
