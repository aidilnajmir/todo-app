// Modules and decorators import
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// Todo entity definition with Swagger documentation properties
@Entity()
export class Todo {
  @ApiProperty({ description: 'The unique identifier of the to-do item' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The title of the to-do item' })
  @Column()
  title: string;

  @ApiProperty({ description: 'The description of the to-do item' })
  @Column()
  description: string;

  @ApiProperty({ description: 'The completion status of the to-do item', default: false })
  @Column({ default: false })
  isCompleted: boolean;
}