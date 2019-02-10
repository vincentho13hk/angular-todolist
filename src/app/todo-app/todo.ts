export class Todo {
  id: number;
  value: string;
  done: boolean = false;
  edit: boolean = false;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
