type Action<Payload> = {
  type: string;
  payload: Payload;
};

type PayloadKey = string;
type PayloadValue = string | number;
type PayloadEntry = [PayloadKey, PayloadValue];

type EntriesToType<T extends PayloadEntry[]> = {
  [K in T[number][0]]: Extract<T[number], [K, PayloadValue]>[1];
};

type EntriesFlat<T extends PayloadEntry[], Index extends 0 | 1> = {
  [K in keyof T]: T[K] extends unknown[] ? T[K][Index] : never;
};

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
function makeActionCreator<
  Entries extends PayloadEntry[],
  Payload extends EntriesToType<Entries> = EntriesToType<Entries>
>(type: string, ...argNames: EntriesFlat<Entries, 0>) {
  return function (...args: EntriesFlat<Entries, 1>) {
    const action = { type } as Action<Payload>;

    if (argNames.length > 0) {
      action.payload = argNames.reduce((payload, key, i) => {
        payload[key as keyof Payload] = args[i] as Payload[keyof Payload];
        return payload;
      }, {} as Payload);
    }

    return action;
  };
}

const actionUpdate = {
  type: "UPDATE_TODO",
  payload: {
    id: 5,
    name: "Learn Redux",
  },
};

const actionReload = {
  type: "RELOAD_TODOS",
};

type ActionUpdateEntries = [["id", number], ["name", string]];
type ActionUpdatePayload = EntriesToType<ActionUpdateEntries>;

const actions = {
  update: makeActionCreator<ActionUpdateEntries>("UPDATE_TODO", "id", "name"),
  reload: makeActionCreator("RELOAD_TODOS"),
};

const realUpdate = actions.update(5, "Learn Redux"); // realUpdate.toEqual(actionUpdate);
const realReload = actions.reload(); // realReload.toEqual(actionReload);
