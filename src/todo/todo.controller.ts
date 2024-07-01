// Modules and decorators import
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

// TodoController class definition with Swagger documentation tags
@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // Endpoints for CRUD operations definition with Swagger documentation

  @ApiOperation({ summary: 'Get all to-dos' })
  @ApiResponse({ status: 200, description: 'Return all to-dos', type: [Todo] })
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @ApiOperation({ summary: 'Get a to-do by ID' })
  @ApiResponse({ status: 200, description: 'Return the to-do', type: Todo })
  @ApiResponse({ status: 404, description: 'To-do not found' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new to-do' })
  @ApiResponse({ status: 201, description: 'The to-do has been successfully created.', type: Todo })
  @Post()
  create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @ApiOperation({ summary: 'Update a to-do by ID' })
  @ApiResponse({ status: 200, description: 'The to-do has been successfully updated.', type: Todo })
  @ApiResponse({ status: 404, description: 'To-do not found' })
  @Put(':id')
  update(@Param('id') id: number, @Body() todo: Todo): Promise<Todo> {
    return this.todoService.update(id, todo);
  }

  @ApiOperation({ summary: 'Delete a to-do by ID' })
  @ApiResponse({ status: 204, description: 'The to-do has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'To-do not found' })
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.todoService.remove(id);
  }
}