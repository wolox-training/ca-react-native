import { isArray } from './utils';

export function min(...value) {
  if (!value || !value.length) { return undefined }
  return isArray(value[0]) ? Math.min(...value[0]) : Math.min(...value);
}

export function copy(value) {
  return isArray(value) ? [ ... value] : { ... value };
}

export function reverseMerge(...value) {
  const newArray = copy(value[0]);
  newArray.unshift(...value[1]);
  return newArray;
}