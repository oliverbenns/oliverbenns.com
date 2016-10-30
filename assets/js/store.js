import constants from './constants';
import dispatcher from './dispatcher';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();
const CHANGE_EVENT = 'change';

const store = {
  emit() {
    emitter.emit(CHANGE_EVENT);
  },

  subscribe(callback) {
    emitter.on(CHANGE_EVENT, callback);
  },

  unsubscribe(callback) {
    emitter.off(CHANGE_EVENT, callback);
  },

  data: {
    menuActive: false,
  },

  toggleMenu(active) {
    this.data.menuActive = active === undefined ? !this.data.menuActive : active;
  },
};

dispatcher.register(({ action }) => {
  switch (action.actionType) {
    case constants.actions.TOGGLE_MENU:
      store.toggleMenu(action.action.active);
      break;
    default:
      break;
  }

  store.emit();
});

export default store;
