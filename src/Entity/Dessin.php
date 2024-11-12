<?php

namespace App\Entity;

use App\Repository\DessinRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DessinRepository::class)]
class Dessin extends Oeuvre
{
    #[ORM\Column(length: 100)]
    private ?string $technique = null;

    public function __construct()
    {
        parent::__construct(); // Appel au constructeur parent
    }

    public function getTechnique(): ?string
    {
        return $this->technique;
    }

    public function setTechnique(string $technique): static
    {
        $this->technique = $technique;

        return $this;
    }
}
