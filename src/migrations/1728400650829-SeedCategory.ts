import { MigrationInterface, QueryRunner } from "typeorm";
import { Categories } from '../entities/category';

export class SeedCategory1728400650829 implements MigrationInterface {
    queryRunner: QueryRunner;

    insert(table: string, data: Record<string, any>[]) {
        const rowData = data[0];
        return this.queryRunner.query(
            `INSERT INTO "${table}" ("${Object.keys(rowData).join(`", "`)}") VALUES
            ${data.map(row => `(${Object.keys(row).map(col => typeof row[col] === 'number' ? row[col] : `'${row[col]}'`).join(', ')})`).join(',\n')}`
        );
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.queryRunner = queryRunner;
        const categories = Categories.filter(item => !item.parentId).map(({ id, name }) => ({ id, name }));
        const subCategories = Categories.filter(item => item.parentId).map(({ id, name, parentId }) => ({ id, name, parentId }));
        await this.insert("category", categories);
        await this.insert("category", subCategories);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "category"`);
    }

}
