import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne ,JoinColumn } from 'typeorm';
import { Todo } from '../todo/todo.entity';

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: false })
  completed: boolean

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date

  @OneToOne(type => Todo, todo => todo.progress)
  @JoinColumn({name: 'todo_id'})
  todo: Todo
}