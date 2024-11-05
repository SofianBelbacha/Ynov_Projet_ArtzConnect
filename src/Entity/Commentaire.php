<?php

namespace App\Entity;

use App\Repository\CommentaireRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentaireRepository::class)]
class Commentaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $textComment = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $dateCommentaire = null;

    #[ORM\Column]
    private ?int $likes = null;

    #[ORM\ManyToOne(inversedBy: 'commentaires')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Oeuvre $oeuvre = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $utilisateur = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'commentaires')]
    private ?self $parentCommentaire = null;

    /**
     * @var Collection<int, self>
     */
    #[ORM\OneToMany(targetEntity: self::class, mappedBy: 'parentCommentaire')]
    private Collection $commentaires;

    public function __construct()
    {
        $this->commentaires = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTextComment(): ?string
    {
        return $this->textComment;
    }

    public function setTextComment(string $textComment): static
    {
        $this->textComment = $textComment;

        return $this;
    }

    public function getDateCommentaire(): ?\DateTimeInterface
    {
        return $this->dateCommentaire;
    }

    public function setDateCommentaire(\DateTimeInterface $dateCommentaire): static
    {
        $this->dateCommentaire = $dateCommentaire;

        return $this;
    }

    public function getLikes(): ?int
    {
        return $this->likes;
    }

    public function setLikes(int $likes): static
    {
        $this->likes = $likes;

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

    public function getUtilisateur(): ?User
    {
        return $this->utilisateur;
    }

    public function setUtilisateur(?User $utilisateur): static
    {
        $this->utilisateur = $utilisateur;

        return $this;
    }

    public function getParentCommentaire(): ?self
    {
        return $this->parentCommentaire;
    }

    public function setParentCommentaire(?self $parentCommentaire): static
    {
        $this->parentCommentaire = $parentCommentaire;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }

    public function addCommentaire(self $commentaire): static
    {
        if (!$this->commentaires->contains($commentaire)) {
            $this->commentaires->add($commentaire);
            $commentaire->setParentCommentaire($this);
        }

        return $this;
    }

    public function removeCommentaire(self $commentaire): static
    {
        if ($this->commentaires->removeElement($commentaire)) {
            // set the owning side to null (unless already changed)
            if ($commentaire->getParentCommentaire() === $this) {
                $commentaire->setParentCommentaire(null);
            }
        }

        return $this;
    }
}
