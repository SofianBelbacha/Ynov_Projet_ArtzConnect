<?php

namespace App\Entity;

use App\Repository\LivreRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LivreRepository::class)]
class Livre extends Oeuvre
{
    #[ORM\Column(type: 'integer')]
    private ?int $pages = null;

    public function __construct()
    {
        parent::__construct(); // Appel au constructeur parent
    }

    public function getPages(): ?int
    {
        return $this->pages;
    }

    public function setPages(int $pages): static
    {
        $this->pages = $pages;

        return $this;
    }
}
