<?php

namespace App\Entity;

use App\Repository\ArtistRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArtistRepository::class)]
class Artist
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nomComplet = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $biographie = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $photoProfil = null;

    /**
     * @var Collection<int, ArtisteOeuvre>
     */
    #[ORM\OneToMany(targetEntity: ArtisteOeuvre::class, mappedBy: 'artiste')]
    private Collection $artisteOeuvres;

    public function __construct()
    {
        $this->artisteOeuvres = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomComplet(): ?string
    {
        return $this->nomComplet;
    }

    public function setNomComplet(string $nomComplet): static
    {
        $this->nomComplet = $nomComplet;

        return $this;
    }

    public function getBiographie(): ?string
    {
        return $this->biographie;
    }

    public function setBiographie(string $biographie): static
    {
        $this->biographie = $biographie;

        return $this;
    }

    public function getPhotoProfil(): ?string
    {
        return $this->photoProfil;
    }

    public function setPhotoProfil(?string $photoProfil): static
    {
        $this->photoProfil = $photoProfil;

        return $this;
    }

    /**
     * @return Collection<int, ArtisteOeuvre>
     */
    public function getArtisteOeuvres(): Collection
    {
        return $this->artisteOeuvres;
    }

    public function addArtisteOeuvre(ArtisteOeuvre $artisteOeuvre): static
    {
        if (!$this->artisteOeuvres->contains($artisteOeuvre)) {
            $this->artisteOeuvres->add($artisteOeuvre);
            $artisteOeuvre->setArtiste($this);
        }

        return $this;
    }

    public function removeArtisteOeuvre(ArtisteOeuvre $artisteOeuvre): static
    {
        if ($this->artisteOeuvres->removeElement($artisteOeuvre)) {
            // set the owning side to null (unless already changed)
            if ($artisteOeuvre->getArtiste() === $this) {
                $artisteOeuvre->setArtiste(null);
            }
        }

        return $this;
    }
}
