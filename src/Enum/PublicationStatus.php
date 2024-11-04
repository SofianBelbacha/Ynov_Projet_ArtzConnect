<?php

namespace App\Enum;

enum PublicationStatus: string
{
    case Published = 'Published';
    case Pending = 'Pending';
    case Removed = 'Removed';
    
    public function getLabel(): string
    {
        return match ($this) {
            self::Published => 'PUBLIEE',
            self::Pending => 'EN_ATTENTE_PUBLICATION',
            self::Removed => 'RETIREE_PAR_ARTISTE',
        };
    }
}