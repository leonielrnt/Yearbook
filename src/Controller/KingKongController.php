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

    #[Route('/events', name: 'events')]
    public function events(): Response
    {
        return $this->render('cookie/events_page/index.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }

    #[Route('/help', name: 'help')]
    public function help(): Response
    {
        return $this->render('cookie/help_page/index.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }

    #[Route('/interview', name: 'interview')]
    public function interview(): Response
    {
        return $this->render('cookie/interview_page/index.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }

    #[Route('/articles', name: 'articles')]
    public function articles(): Response
    {
        return $this->render('cookie/article_page/index.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }

    #[Route('/news', name: 'news')]
    public function news(): Response
    {
        return $this->render('cookie/news_page/index.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }

    #[Route('/burger', name: 'burger')]
    public function burger(): Response
    {
        return $this->render('cookie/menuburger/index.html.twig', [
            'controller_name' => 'cookieController',
            'var_1' => 5+6
        ]);
    }
}

