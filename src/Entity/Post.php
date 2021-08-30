<?php

namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PostRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 * @ApiResource(
 * normalizationContext:{"groups"=> {read:"professeur"}})
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:professeur"})
     */
    private $id;

     /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:professeur"})
     */
    private $prenom;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read:professeur"})
     */
    private $Id_Teachrs;

   
    /**
     * @ORM\Column(type="date")
     */
    private $date_creation;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdTeachrs(): ?int
    {
        return $this->Id_Teachrs;
    }

    public function setIdTeachrs(int $Id_Teachrs): self
    {
        $this->Id_Teachrs = $Id_Teachrs;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getDateCreation(): ?\DateTimeInterface
    {
        return $this->date_creation;
    }

    public function setDateCreation(\DateTimeInterface $date_creation): self
    {
        $this->date_creation = $date_creation;

        return $this;
    }

}
