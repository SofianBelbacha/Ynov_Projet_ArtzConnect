<?php

namespace App\Entity;

use App\Enum\PublicationStatus;
use App\Repository\OeuvreRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OeuvreRepository::class)]
#[ORM\InheritanceType("JOINED")]
#[ORM\DiscriminatorColumn(name: "type", type: "string")]
#[ORM\DiscriminatorMap(["oeuvre" => Oeuvre::class, "dessin" => Dessin::class, "livre" => Livre::class, "musique" => Musique::class])]
class Oeuvre
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titre = null;

    #[ORM\Column(length: 255)]
    private ?PublicationStatus $statutPublication = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $dateCreation = null;

    /**
     * @var Collection<int, ArtisteOeuvre>
     */
    #[ORM\OneToMany(targetEntity: ArtisteOeuvre::class, mappedBy: 'oeuvre')]
    private Collection $artisteOeuvres;

    /**
     * @var Collection<int, Commentaire>
     */
    #[ORM\OneToMany(targetEntity: Commentaire::class, mappedBy: 'oeuvre', orphanRemoval: true)]
    private Collection $commentaires;

    /**
     * @var Collection<int, Media>
     */
    #[ORM\OneToMany(targetEntity: Media::class, mappedBy: 'oeuvre', orphanRemoval: true)]
    private Collection $media;

    /**
     * @var Collection<int, Genre>
     */
    #[ORM\ManyToMany(targetEntity: Genre::class, mappedBy: 'oeuvre')]
    private Collection $oeuvre_genres;

    /**
     * @var Collection<int, Tag>
     */
    #[ORM\ManyToMany(targetEntity: Tag::class, mappedBy: 'oeuvre')]
    private Collection $oeuvre_tag;

    public function __construct()
    {
        $this->artisteOeuvres = new ArrayCollection();
        $this->commentaires = new ArrayCollection();
        $this->media = new ArrayCollection();
        $this->oeuvre_genres = new ArrayCollection();
        $this->oeuvre_tag = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getStatutPublication(): ?PublicationStatus
    {
        return $this->statutPublication;
    }

    public function setStatutPublication(PublicationStatus $statutPublication): static
    {
        $this->statutPublication = $statutPublication;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getDateCreation(): ?\DateTimeInterface
    {
        return $this->dateCreation;
    }

    public function setDateCreation(\DateTimeInterface $dateCreation): static
    {
        $this->dateCreation = $dateCreation;

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
            $artisteOeuvre->setOeuvre($this);
        }

        return $this;
    }

    public function removeArtisteOeuvre(ArtisteOeuvre $artisteOeuvre): static
    {
        if ($this->artisteOeuvres->removeElement($artisteOeuvre)) {
            // set the owning side to null (unless already changed)
            if ($artisteOeuvre->getOeuvre() === $this) {
                $artisteOeuvre->setOeuvre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Commentaire>
     */
    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }

    public function addCommentaire(Commentaire $commentaire): static
    {
        if (!$this->commentaires->contains($commentaire)) {
            $this->commentaires->add($commentaire);
            $commentaire->setOeuvre($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaire $commentaire): static
    {
        if ($this->commentaires->removeElement($commentaire)) {
            // set the owning side to null (unless already changed)
            if ($commentaire->getOeuvre() === $this) {
                $commentaire->setOeuvre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Media>
     */
    public function getMedia(): Collection
    {
        return $this->media;
    }

    public function addMedium(Media $medium): static
    {
        if (!$this->media->contains($medium)) {
            $this->media->add($medium);
            $medium->setOeuvre($this);
        }

        return $this;
    }

    public function removeMedium(Media $medium): static
    {
        if ($this->media->removeElement($medium)) {
            // set the owning side to null (unless already changed)
            if ($medium->getOeuvre() === $this) {
                $medium->setOeuvre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Genre>
     */
    public function getGenres(): Collection
    {
        return $this->oeuvre_genres;
    }

    public function addGenre(Genre $genre): static
    {
        if (!$this->oeuvre_genres->contains($genre)) {
            $this->oeuvre_genres->add($genre);
            $genre->addOeuvre($this);
        }

        return $this;
    }

    public function removeGenre(Genre $genre): static
    {
        if ($this->oeuvre_genres->removeElement($genre)) {
            $genre->removeOeuvre($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Tag>
     */
    public function getOeuvreTag(): Collection
    {
        return $this->oeuvre_tag;
    }

    public function addOeuvreTag(Tag $oeuvreTag): static
    {
        if (!$this->oeuvre_tag->contains($oeuvreTag)) {
            $this->oeuvre_tag->add($oeuvreTag);
            $oeuvreTag->addOeuvre($this);
        }

        return $this;
    }

    public function removeOeuvreTag(Tag $oeuvreTag): static
    {
        if ($this->oeuvre_tag->removeElement($oeuvreTag)) {
            $oeuvreTag->removeOeuvre($this);
        }

        return $this;
    }
}
