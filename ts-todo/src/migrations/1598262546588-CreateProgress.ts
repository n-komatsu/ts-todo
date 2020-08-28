import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProgress1598262546588 implements MigrationInterface {
    name = 'CreateProgress1598262546588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `progress` (`id` int NOT NULL AUTO_INCREMENT, `completed` tinyint NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, `todo_id` int NULL, UNIQUE INDEX `REL_0c5c5f23ea86b285086d56addb` (`todo_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `progress` ADD CONSTRAINT `FK_0c5c5f23ea86b285086d56addb7` FOREIGN KEY (`todo_id`) REFERENCES `todos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `progress` DROP FOREIGN KEY `FK_0c5c5f23ea86b285086d56addb7`");
        await queryRunner.query("DROP INDEX `REL_0c5c5f23ea86b285086d56addb` ON `progress`");
        await queryRunner.query("DROP TABLE `progress`");
    }

}
