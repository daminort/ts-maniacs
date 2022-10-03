type InvertKeysMap = Record<string, string>;
type InvertKeys<T extends InvertKeysMap> = {
  [K in keyof T as T[K]]: K;
};

type AdaptObject = Record<string, unknown>;
type AdaptWithMap<T extends AdaptObject, M extends InvertKeysMap> = {
  [K in keyof T as K extends keyof M ? M[K] : K]: T[K];
};

const keyMap = {
  user_name: "userName",
  was_born: "wasBorn",
} as const;

const invertedKeyMap = invertKeyMap(keyMap);

const input = {
  id: 1,
  user_name: "John",
  age: 20,
  was_born: 1970,
};

const output = {
  id: 1,
  userName: "John",
  age: 20,
  wasBorn: 1970,
};

function invertKeyMap<
  Map extends InvertKeysMap,
  Output extends InvertKeys<Map>
>(keyMap: Map): Output {
  return Object.keys(keyMap).reduce((res, originKey) => {
    const adaptedKey = keyMap[originKey];
    res[adaptedKey as keyof Output] = originKey as Output[keyof Output];
    return res;
  }, {} as Output);
}

function adapt<
  T extends AdaptObject,
  Map extends InvertKeysMap,
  Output extends AdaptWithMap<T, Map>
>(input: T, keyMap: Map): Output {
  return Object.keys(input).reduce((res, key) => {
    const newKey = keyMap[key] || key;
    res[newKey as keyof Output] = input[key] as Output[keyof Output];

    return res;
  }, {} as Output);
}

const adaptedInput = adapt(input, keyMap); // adaptedInput.toEqual(output);
const originInput = adapt(adaptedInput, invertedKeyMap); // originInput.toEqual(input);
