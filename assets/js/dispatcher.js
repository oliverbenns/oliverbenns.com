import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();

dispatcher.handleAction = function(action) {
  this.dispatch({
    action: action
  });
}

export default dispatcher;
