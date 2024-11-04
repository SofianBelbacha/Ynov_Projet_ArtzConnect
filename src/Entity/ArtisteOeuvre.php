<?php

namespace App\Entity;

use App\Repository\ArtisteOeuvreRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArtisteOeuvreRepository::class)]
class ArtisteOeuvre
{
    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'artisteOeuvres')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Artist $artiste = null;

    #[ORM\Column(length: 50)]
    private ?string $role = null;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'artisteOeuvres')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Oeuvre $oeuvre = null;

    public function getArtiste(): ?Artist
    {
        return $this->artiste;
    }

    public function setArtiste(?Artist $artiste): static
    {
        $this->artiste = $artiste;

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getOeuvre(): ?Oeuvre
    {
        return $this->oeuvre;
    }

    public function setOeuvre(?Oeuvre $oeuvre): static
    {
        $this->oeuvre = $oeuvre;

        return $this;
    }
}
