import {Instance, types} from 'mobx-state-tree';

const Todo = types.model({
  name: types.optional(types.string, ''),
  done: types.optional(types.boolean, false),
});

export type ITodo = Instance<typeof Todo>;

export default Todo;
