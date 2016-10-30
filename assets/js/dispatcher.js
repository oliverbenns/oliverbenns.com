import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();

dispatcher.handleAction = function handleAction(action) {
  this.dispatch({
    action,
  });
};

export default dispatcher;
