import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

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
}
