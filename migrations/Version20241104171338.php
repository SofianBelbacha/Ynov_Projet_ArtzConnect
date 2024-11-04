<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241104171338 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE artist (id SERIAL NOT NULL, nom_complet VARCHAR(255) NOT NULL, biographie TEXT NOT NULL, photo_profil VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE artiste_oeuvre (artiste_id INT NOT NULL, oeuvre_id INT NOT NULL, role VARCHAR(50) NOT NULL, PRIMARY KEY(artiste_id, oeuvre_id))');
        $this->addSql('CREATE INDEX IDX_6F8FD8FF21D25844 ON artiste_oeuvre (artiste_id)');
        $this->addSql('CREATE INDEX IDX_6F8FD8FF88194DE8 ON artiste_oeuvre (oeuvre_id)');
        $this->addSql('CREATE TABLE blogpost (id SERIAL NOT NULL, utilisateur_id INT NOT NULL, titre VARCHAR(255) NOT NULL, contenue TEXT NOT NULL, date_publication TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1284FB7DFB88E14F ON blogpost (utilisateur_id)');
        $this->addSql('CREATE TABLE commentaire (id SERIAL NOT NULL, oeuvre_id INT NOT NULL, utilisateur_id INT NOT NULL, parent_commentaire_id INT DEFAULT NULL, text_comment TEXT NOT NULL, date_commentaire TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, likes INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_67F068BC88194DE8 ON commentaire (oeuvre_id)');
        $this->addSql('CREATE INDEX IDX_67F068BCFB88E14F ON commentaire (utilisateur_id)');
        $this->addSql('CREATE INDEX IDX_67F068BCA441A59B ON commentaire (parent_commentaire_id)');
        $this->addSql('CREATE TABLE dessin (id INT NOT NULL, technique VARCHAR(100) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE genre (id SERIAL NOT NULL, llibelle_genre VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE genre_oeuvre (genre_id INT NOT NULL, oeuvre_id INT NOT NULL, PRIMARY KEY(genre_id, oeuvre_id))');
        $this->addSql('CREATE INDEX IDX_DE4D1EDE4296D31F ON genre_oeuvre (genre_id)');
        $this->addSql('CREATE INDEX IDX_DE4D1EDE88194DE8 ON genre_oeuvre (oeuvre_id)');
        $this->addSql('CREATE TABLE livre (id INT NOT NULL, pages INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE media (id SERIAL NOT NULL, oeuvre_id INT NOT NULL, url VARCHAR(255) NOT NULL, type_media VARCHAR(50) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_6A2CA10C88194DE8 ON media (oeuvre_id)');
        $this->addSql('CREATE TABLE musique (id INT NOT NULL, duree TIME(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE oeuvre (id SERIAL NOT NULL, titre VARCHAR(255) NOT NULL, statut_publication VARCHAR(255) NOT NULL, description TEXT NOT NULL, date_creation DATE NOT NULL, type VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE tag (id SERIAL NOT NULL, libelle_tag VARCHAR(50) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE tag_oeuvre (tag_id INT NOT NULL, oeuvre_id INT NOT NULL, PRIMARY KEY(tag_id, oeuvre_id))');
        $this->addSql('CREATE INDEX IDX_DCBF67D2BAD26311 ON tag_oeuvre (tag_id)');
        $this->addSql('CREATE INDEX IDX_DCBF67D288194DE8 ON tag_oeuvre (oeuvre_id)');
        $this->addSql('CREATE TABLE utilisateur (id SERIAL NOT NULL, nom VARCHAR(50) DEFAULT NULL, prenom VARCHAR(50) DEFAULT NULL, email VARCHAR(255) NOT NULL, date_inscription DATE NOT NULL, is_admin BOOLEAN NOT NULL, is_newsletter BOOLEAN NOT NULL, google_id VARCHAR(255) DEFAULT NULL, password VARCHAR(255) NOT NULL, derniere_connexion TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1D1C63B3E7927C74 ON utilisateur (email)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1D1C63B376F5C865 ON utilisateur (google_id)');
        $this->addSql('CREATE TABLE messenger_messages (id BIGSERIAL NOT NULL, body TEXT NOT NULL, headers TEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, available_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, delivered_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_75EA56E0FB7336F0 ON messenger_messages (queue_name)');
        $this->addSql('CREATE INDEX IDX_75EA56E0E3BD61CE ON messenger_messages (available_at)');
        $this->addSql('CREATE INDEX IDX_75EA56E016BA31DB ON messenger_messages (delivered_at)');
        $this->addSql('COMMENT ON COLUMN messenger_messages.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN messenger_messages.available_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN messenger_messages.delivered_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE OR REPLACE FUNCTION notify_messenger_messages() RETURNS TRIGGER AS $$
            BEGIN
                PERFORM pg_notify(\'messenger_messages\', NEW.queue_name::text);
                RETURN NEW;
            END;
        $$ LANGUAGE plpgsql;');
        $this->addSql('DROP TRIGGER IF EXISTS notify_trigger ON messenger_messages;');
        $this->addSql('CREATE TRIGGER notify_trigger AFTER INSERT OR UPDATE ON messenger_messages FOR EACH ROW EXECUTE PROCEDURE notify_messenger_messages();');
        $this->addSql('ALTER TABLE artiste_oeuvre ADD CONSTRAINT FK_6F8FD8FF21D25844 FOREIGN KEY (artiste_id) REFERENCES artist (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE artiste_oeuvre ADD CONSTRAINT FK_6F8FD8FF88194DE8 FOREIGN KEY (oeuvre_id) REFERENCES oeuvre (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE blogpost ADD CONSTRAINT FK_1284FB7DFB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BC88194DE8 FOREIGN KEY (oeuvre_id) REFERENCES oeuvre (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCFB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCA441A59B FOREIGN KEY (parent_commentaire_id) REFERENCES commentaire (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE dessin ADD CONSTRAINT FK_427D5118BF396750 FOREIGN KEY (id) REFERENCES oeuvre (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE genre_oeuvre ADD CONSTRAINT FK_DE4D1EDE4296D31F FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE genre_oeuvre ADD CONSTRAINT FK_DE4D1EDE88194DE8 FOREIGN KEY (oeuvre_id) REFERENCES oeuvre (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE livre ADD CONSTRAINT FK_AC634F99BF396750 FOREIGN KEY (id) REFERENCES oeuvre (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C88194DE8 FOREIGN KEY (oeuvre_id) REFERENCES oeuvre (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE musique ADD CONSTRAINT FK_EE1D56BCBF396750 FOREIGN KEY (id) REFERENCES oeuvre (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tag_oeuvre ADD CONSTRAINT FK_DCBF67D2BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tag_oeuvre ADD CONSTRAINT FK_DCBF67D288194DE8 FOREIGN KEY (oeuvre_id) REFERENCES oeuvre (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE artiste_oeuvre DROP CONSTRAINT FK_6F8FD8FF21D25844');
        $this->addSql('ALTER TABLE artiste_oeuvre DROP CONSTRAINT FK_6F8FD8FF88194DE8');
        $this->addSql('ALTER TABLE blogpost DROP CONSTRAINT FK_1284FB7DFB88E14F');
        $this->addSql('ALTER TABLE commentaire DROP CONSTRAINT FK_67F068BC88194DE8');
        $this->addSql('ALTER TABLE commentaire DROP CONSTRAINT FK_67F068BCFB88E14F');
        $this->addSql('ALTER TABLE commentaire DROP CONSTRAINT FK_67F068BCA441A59B');
        $this->addSql('ALTER TABLE dessin DROP CONSTRAINT FK_427D5118BF396750');
        $this->addSql('ALTER TABLE genre_oeuvre DROP CONSTRAINT FK_DE4D1EDE4296D31F');
        $this->addSql('ALTER TABLE genre_oeuvre DROP CONSTRAINT FK_DE4D1EDE88194DE8');
        $this->addSql('ALTER TABLE livre DROP CONSTRAINT FK_AC634F99BF396750');
        $this->addSql('ALTER TABLE media DROP CONSTRAINT FK_6A2CA10C88194DE8');
        $this->addSql('ALTER TABLE musique DROP CONSTRAINT FK_EE1D56BCBF396750');
        $this->addSql('ALTER TABLE tag_oeuvre DROP CONSTRAINT FK_DCBF67D2BAD26311');
        $this->addSql('ALTER TABLE tag_oeuvre DROP CONSTRAINT FK_DCBF67D288194DE8');
        $this->addSql('DROP TABLE artist');
        $this->addSql('DROP TABLE artiste_oeuvre');
        $this->addSql('DROP TABLE blogpost');
        $this->addSql('DROP TABLE commentaire');
        $this->addSql('DROP TABLE dessin');
        $this->addSql('DROP TABLE genre');
        $this->addSql('DROP TABLE genre_oeuvre');
        $this->addSql('DROP TABLE livre');
        $this->addSql('DROP TABLE media');
        $this->addSql('DROP TABLE musique');
        $this->addSql('DROP TABLE oeuvre');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE tag_oeuvre');
        $this->addSql('DROP TABLE utilisateur');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
