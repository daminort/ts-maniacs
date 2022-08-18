/**
 * Makes action creator
 * @param {String} type a type of action
 * @param  {...String} argNames names of values which will be used as payload
 * @returns {Function}
 *
 * Example:
 * const addTodo = makeActionCreator('ADD_TODO', 'text');
 * const action = addTodo('Learn Redux');
 * console.log(action);
 *
 * Output:
 * {
 *    type: 'ADD_TODO',
 *    payload: {
 *      text: 'Learn Redux',
 *    }
 * }
 */
function makeActionCreator(type, ...argNames) {

  return function (...args) {

    const action = { type };

    if (argNames.length > 0) {
      const payload = {};
      argNames.forEach((arg, index) => {
        const name = argNames[index];
        payload[name] = args[index];
      });

      action.payload = payload;
    }

    return action;
  };
}

const actionUpdate = {
  type: 'UPDATE_TODO',
  payload: {
    id: 5,
    name: 'Learn Redux',
  },
};

const actionReload = {
  type: 'RELOAD_TODOS',
};

const actions = {
  update: makeActionCreator('UPDATE_TODO', 'id', 'name'),
  reload: makeActionCreator('RELOAD_TODOS'),
};

const realUpdate = actions.update(5, 'Learn Redux'); // realUpdate.toEqual(actionUpdate);
const realReload = actions.reload(); // realReload.toEqual(actionReload);
