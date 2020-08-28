import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Progress } from '../progress/progress.entity';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', default: null })
  deletedAt?: Date

  @OneToOne(type => Progress, progress => progress.todo, { cascade: true })
  progress: Progress
}
