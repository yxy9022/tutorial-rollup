import { add } from './utitls';
import data from './data.json'

export const UtilLib = {
  version: data.VERSION,
  doubleAdd: function (x, y) {
    return 2 * add(x, y);
  }
}