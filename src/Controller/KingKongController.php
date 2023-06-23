<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class KingKongController extends AbstractController
{
    #[Route('/king/kong', name: 'app_king_kong')]
    public function index(): Response
    {
        return $this->render('king_kong/index.html.twig', [
            'controller_name' => 'KingKongController',
        ]);
    }

    #[Route('/king/kong', name: 'cookie')]
    public function cookie_index(): Response
    {
        return $this->render('cookie/cookie.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }

    #[Route('/hetic', name: 'hetic')]
    public function hetic(): Response
    {
        return $this->render('cookie/landing_page/code/index.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }

    #[Route('/asso', name: 'asso')]
    public function asso(): Response
    {
        return $this->render('cookie/asso_page/index.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }
}

