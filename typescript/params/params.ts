const defaultParams = {
  id: "1",
  page: "1",
  token: "",
};

const exampleParams = {
  id: "241",
  page: "18",
  token: "qwerty",
};

function readParams<P extends Record<K, string>, K extends string = string>(
  defaultParams: P
): P {
  const { search } = window.location;
  const params = new URLSearchParams(search);

  const keys = Object.keys(defaultParams) as K[];
  const result = {} as P;

  for (const key of keys) {
    result[key] = (params.get(key) as P[K]) || defaultParams[key];
  }

  return result;
}

// URL: /home
const emptyParams = readParams(defaultParams); // emptyParams.toEqual(defaultParams)

// URL: /home?id=241&page=18&token=qwerty
const realParams = readParams(defaultParams); // realParams.toEqual(exampleParams)
