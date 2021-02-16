import {Instance, types} from 'mobx-state-tree';
import Reactotron from 'reactotron-react-native';

import {TodoStore} from 'src/stores/TodoStore';

export const RootStore = types.model({
  todoStore: types.optional(TodoStore, {}),
});

export type IRootStore = Instance<typeof RootStore>;

let store: IRootStore | null = null;

const getRootStore = (): IRootStore => {
  if (store === null) {
    store = RootStore.create({});
    if (__DEV__) {
      Reactotron.trackMstNode!(store);
    }
  }
  return store;
};

export {getRootStore};
