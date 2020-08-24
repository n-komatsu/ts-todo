import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class progress {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  completed: boolean

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date
}