import {Instance, types} from 'mobx-state-tree';
import TodoStore from 'src/stores/TodoStore';

const RootStore = types.model({
  todoStore: types.optional(TodoStore, {}),
});

export type IRootStore = Instance<typeof RootStore>;

let store: IRootStore | null = null;

const getRootStore = (): IRootStore => {
  if (store === null) {
    store = RootStore.create({});
  }
  return store;
};

export {getRootStore};

export default RootStore;
