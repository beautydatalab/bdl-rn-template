import {Instance, types} from 'mobx-state-tree';

export const Todo = types.model({
  name: types.optional(types.string, ''),
  done: types.optional(types.boolean, false),
});

export type ITodo = Instance<typeof Todo>;
