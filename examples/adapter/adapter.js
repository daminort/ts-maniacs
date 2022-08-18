const input = {
  id: 1,
  user_name: 'John',
  age: 20,
  was_born: 1970,
};

const keyMap = {
  user_name: 'userName',
  was_born: 'wasBorn',
}

const invertedKeyMap = invertKeyMap(keyMap);

const output = {
  id: 1,
  userName: 'John',
  age: 20,
  wasBorn: 1970,
}

function invertKeyMap(keyMap) {
  const invertedMap = Object.keys(keyMap).reduce((res, originKey) => {
    const adaptedKey = keyMap[originKey];
    res[adaptedKey] = originKey;

    return res;
  }, {});
}

function adapt(input, keyMap) {
  return Object.keys(input).reduce((res, key) => {
    const newKey = keyMap[key] || key;
    res[newKey] = input[key];

    return res;
  }, {});
}

const adaptedInput = adapt(input, keyMap); // adaptedInput.toEqual(output);
const originInput = adapt(adaptedInput, invertedKeyMap); // originInput.toEqual(input);
