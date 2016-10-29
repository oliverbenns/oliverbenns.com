import dispatcher from './dispatcher'
import { EventEmitter } from 'events'
import constants from './constants'

const emitter = new EventEmitter();
const CHANGE_EVENT = 'change';

const store = {
  emit: function() {
    emitter.emit(CHANGE_EVENT);
  },

  subscribe: function(callback) {
    emitter.on(CHANGE_EVENT, callback);
  },

  unsubscribe: function(callback) {
    emitter.off(CHANGE_EVENT, callback);
  },

  data: {
    menuActive: false,
  },

  toggleMenu(active) {
    this.data.menuActive = active === undefined ? !this.data.menuActive : active;
  }
};

dispatcher.register(({ action }) => {
  switch(action.actionType) {
    case constants.actions.TOGGLE_MENU:
      store.toggleMenu(action.action.active);
      break;
  }

  store.emit();
});

export default store;
