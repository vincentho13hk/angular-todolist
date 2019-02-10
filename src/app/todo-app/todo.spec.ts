import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('应该在构造函数中接受值', () => {
    const todo = new Todo({
        value: 'hello',
        done: true
    });
    expect(todo.value).toEqual('hello');
    expect(todo.done).toEqual(true);
    expect(todo.edit).toEqual(false);
  });
});
