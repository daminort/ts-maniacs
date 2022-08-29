// const defaultParams = {
//   id: '',
//   page: '1',
//   token: '',
// };

// const exampleParams = {
//   id: '241',
//   page: '18',
//   token: 'qwerty',
// }

// function readParams(defaultParams) {
//   const { search } = window.location;
//   const params = new URLSearchParams(search);

//   const keys = Object.keys(defaultParams);
//   const result = {};

//   for (const key of keys) {
//     result[key] = params.get(key) || defaultParams[key];
//   }

//   return result;
// }

// // URL: /home
// const emptyParams = readParams(defaultParams); // emptyParams.toEqual(defaultParams)

// // URL: /home?id=241&page=18&token=qwerty
// const realParams = readParams(defaultParams); // realParams.toEqual(exampleParams)
