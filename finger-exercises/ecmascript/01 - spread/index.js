import { isArray } from './utils';

export function min(...value) {
  if (!value.length) { return undefined }
  return isArray(value[0]) ? Math.min(...value[0]) : Math.min(...value);
}

export function copy() {

}
