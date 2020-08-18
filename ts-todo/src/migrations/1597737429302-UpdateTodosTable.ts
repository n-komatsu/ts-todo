import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTodosTable1597737429302 implements MigrationInterface {
    name = 'UpdateTodosTable1597737429302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `todos` DROP COLUMN `completed`");
        await queryRunner.query("ALTER TABLE `todos` ADD `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `todos` ADD `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `todos` ADD `deleted_at` timestamp(6) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `todos` DROP COLUMN `deleted_at`");
        await queryRunner.query("ALTER TABLE `todos` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `todos` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `todos` ADD `completed` tinyint NOT NULL DEFAULT '0'");
    }

}
