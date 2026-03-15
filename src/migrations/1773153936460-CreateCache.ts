import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCache1773153936460 implements MigrationInterface {
    name = 'CreateCache1773153936460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS pg_cron`);
        await queryRunner.query(`CREATE UNLOGGED TABLE "cache" ("key" character varying NOT NULL, "value" jsonb NOT NULL, "expiresAt" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_56570efc222b6e6be947abfc801" PRIMARY KEY ("key"))`);
        // clear cache every 5 minutes
        await queryRunner.query(`SELECT cron.schedule('cache-cleanup', '*/5 * * * *', 'DELETE FROM cache WHERE "expiresAt" < now()')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`SELECT cron.unschedule('cache-cleanup')`);
        await queryRunner.query(`DROP TABLE "cache"`);
        await queryRunner.query(`DROP EXTENSION IF EXISTS pg_cron`);
    }

}
