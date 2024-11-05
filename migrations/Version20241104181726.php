<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241104181726 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commentaire DROP CONSTRAINT fk_67f068bcfb88e14f');
        $this->addSql('ALTER TABLE blogpost DROP CONSTRAINT fk_1284fb7dfb88e14f');
        $this->addSql('DROP SEQUENCE utilisateur_id_seq CASCADE');
        $this->addSql('CREATE TABLE "user" (id SERIAL NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, nom VARCHAR(50) DEFAULT NULL, prenom VARCHAR(50) DEFAULT NULL, date_inscription DATE NOT NULL, is_newsletter BOOLEAN NOT NULL, google_id VARCHAR(255) DEFAULT NULL, derniere_connexion TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL ON "user" (email)');
        $this->addSql('DROP TABLE utilisateur');
        $this->addSql('ALTER TABLE blogpost ADD CONSTRAINT FK_1284FB7DFB88E14F FOREIGN KEY (utilisateur_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCFB88E14F FOREIGN KEY (utilisateur_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE blogpost DROP CONSTRAINT FK_1284FB7DFB88E14F');
        $this->addSql('ALTER TABLE commentaire DROP CONSTRAINT FK_67F068BCFB88E14F');
        $this->addSql('CREATE SEQUENCE utilisateur_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE utilisateur (id SERIAL NOT NULL, nom VARCHAR(50) DEFAULT NULL, prenom VARCHAR(50) DEFAULT NULL, email VARCHAR(255) NOT NULL, date_inscription DATE NOT NULL, is_admin BOOLEAN NOT NULL, is_newsletter BOOLEAN NOT NULL, google_id VARCHAR(255) DEFAULT NULL, password VARCHAR(255) NOT NULL, derniere_connexion TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX uniq_1d1c63b376f5c865 ON utilisateur (google_id)');
        $this->addSql('CREATE UNIQUE INDEX uniq_1d1c63b3e7927c74 ON utilisateur (email)');
        $this->addSql('DROP TABLE "user"');
        $this->addSql('ALTER TABLE commentaire DROP CONSTRAINT fk_67f068bcfb88e14f');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT fk_67f068bcfb88e14f FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE blogpost DROP CONSTRAINT fk_1284fb7dfb88e14f');
        $this->addSql('ALTER TABLE blogpost ADD CONSTRAINT fk_1284fb7dfb88e14f FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }
}
