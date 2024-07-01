// Modules and decorators import
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

// TodoService with CRUD methods and exception handling definition
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`To-do with ID ${id} not found`);
    }
    return todo;
  }

  create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo> {
    await this.todoRepository.update(id, todo);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.todoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`To-do with ID ${id} not found`);
    }
  }
}
