import { Injectable } from '@nestjs/common';
import { Repository, Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Progress } from './progress.entity';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private progressRepository: Repository<Progress>,
    private connection: Connection
  ){}

  async update(id: string) {
    const progress = await this.progressRepository.findOne({ where: { todo: { id } } });
    await this.progressRepository.update(progress.id, { completed: !progress.completed });
    const updateProgress = await this.progressRepository.findOne(progress.id);
    return updateProgress;
  }
}
