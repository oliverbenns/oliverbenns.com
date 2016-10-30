import constants from './constants';
import dispatcher from './dispatcher';

export default {
  toggleMenu: data => {
    dispatcher.handleAction({
      actionType: constants.actions.TOGGLE_MENU,
      action: data,
    });
  },
};
