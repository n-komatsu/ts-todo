import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateProgress1598263925662 implements MigrationInterface {
    name = 'UpdateProgress1598263925662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `progress` CHANGE `completed` `completed` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `progress` CHANGE `completed` `completed` tinyint NOT NULL");
    }

}
