export const isObject = entity => entity && typeof entity === 'object' && entity.constructor === Object;

export const isArray = value => Array.isArray(value);

export const isUndefined = value => value === undefined;

export const isEmpty = (value) => {
  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }
  if (isUndefined(value)) {
    return true;
  }
  if (isArray(value)) {
    return value.length === 0;
  }

  return value === '';
};
