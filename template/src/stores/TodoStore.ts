import {Instance, types} from 'mobx-state-tree';

import {Todo} from 'src/stores/models/Todo';

export const TodoStore = types.model({
  todos: types.optional(types.array(Todo), []),
});

export type ITodoStore = Instance<typeof TodoStore>;
