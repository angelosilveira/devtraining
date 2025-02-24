import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Course } from './courses.entity'
import { randomUUID } from 'node:crypto'

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => Course, course => course.tags)
  courses: Course[]

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @BeforeInsert()
  generateId() {
    if (this.id) {
      return
    }

    randomUUID()
  }
}
