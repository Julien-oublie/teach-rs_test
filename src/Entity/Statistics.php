<?php

namespace App\Entity;

use ApiPlatform\Core\annotation\ApiResource;
use App\Repository\StatisticsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StatisticsRepository::class)
 * * @ApiResource()
 */
class Statistics
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $Id_Teachrs;

    /**
     * @ORM\Column(type="integer")
     */
    private $stat;

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

    public function getStat(): ?int
    {
        return $this->stat;
    }

    public function setStat(int $stat): self
    {
        $this->stat = $stat;

        return $this;
    }
}
