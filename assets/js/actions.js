import dispatcher from './dispatcher';
import constants from './constants';

export default {
  toggleMenu: data => {
    dispatcher.handleAction({
      actionType: constants.actions.TOGGLE_MENU,
      action: data
    });
  }
}
