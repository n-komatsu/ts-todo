import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodosTable1597397066232 implements MigrationInterface {
    name = 'CreateTodosTable1597397066232'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `todos` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `completed` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `todos`");
    }

}
