import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgressController } from './progress.controller';
import { ProgressService } from './progress.service';
import { Progress } from './progress.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Progress])
  ],
  exports: [TypeOrmModule],
  controllers: [ProgressController],
  providers: [ProgressService]
})
export class ProgressModule {}
