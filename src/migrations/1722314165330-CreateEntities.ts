import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntities1722314165330 implements MigrationInterface {
    name = 'CreateEntities1722314165330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."song_recordtype_enum" AS ENUM('studio', 'live', 'fan record')`);
        await queryRunner.query(`CREATE TABLE "song" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(100) NOT NULL, "releaseDate" date, "recordType" "public"."song_recordtype_enum", "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_baaa977f861cce6ff954ccee285" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."artist_gender_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`CREATE TABLE "artist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "gender" "public"."artist_gender_enum" NOT NULL DEFAULT 'other', "debut" date, CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "artistSongs" ("artistId" uuid NOT NULL, "songId" uuid NOT NULL, CONSTRAINT "PK_fc959d152152f271ea54505d18a" PRIMARY KEY ("artistId", "songId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c5049a5497dc9777076c2b2b8f" ON "artistSongs" ("artistId") `);
        await queryRunner.query(`CREATE INDEX "IDX_626fb9ec5045c7959f2507773d" ON "artistSongs" ("songId") `);
        await queryRunner.query(`ALTER TABLE "artistSongs" ADD CONSTRAINT "FK_c5049a5497dc9777076c2b2b8f5" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "artistSongs" ADD CONSTRAINT "FK_626fb9ec5045c7959f2507773d8" FOREIGN KEY ("songId") REFERENCES "song"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artistSongs" DROP CONSTRAINT "FK_626fb9ec5045c7959f2507773d8"`);
        await queryRunner.query(`ALTER TABLE "artistSongs" DROP CONSTRAINT "FK_c5049a5497dc9777076c2b2b8f5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_626fb9ec5045c7959f2507773d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c5049a5497dc9777076c2b2b8f"`);
        await queryRunner.query(`DROP TABLE "artistSongs"`);
        await queryRunner.query(`DROP TABLE "artist"`);
        await queryRunner.query(`DROP TYPE "public"."artist_gender_enum"`);
        await queryRunner.query(`DROP TABLE "song"`);
        await queryRunner.query(`DROP TYPE "public"."song_recordtype_enum"`);
    }

}
