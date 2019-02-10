import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Placeholder for todo's
  todos: Todo[] = [];
  /** Used to generate unique ID's */
  nextId = 0;
  ranNum = 1;

  constructor() { }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoService {
    todo.id = Date.now()+this.ranNum;
    this.ranNum += 1;
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoService {
    this.ranNum -= 1;
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate POST /todos/delete
  deleteAllTodo(): TodoService {
    this.ranNum = 1;
    this.todos = this.todos
      .filter(todo => !todo.done);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/done
  getAllDoneTodos(): Todo[] {
    return this.todos.filter(todo => todo.done);
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo done
  toggleTodoDone(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      done: !todo.done
    });
    return updatedTodo;
  }
}
