import _ from 'lodash';

export const translateParams = (obj) => {
  let translated = {};
  for (let k in obj) {
    let val = obj[k];
    if (
      typeof val === 'object' &&
      !Array.isArray(val) &&
      !!val &&
      Object.keys(val).length
    ) {
      val = (<span class="search_match_stream">translateParams</span>)(val);
    }
    translated[_.camelCase(k)] = val;
  }
  return translated;
};
