import qs from 'querystringify'

// 箭头函数
export const add = (x, y) => {
  return x + y;
}

/**
 * url追加/替换query参数
 * @param {String} url 请求url
 * @param {Object} addedQuery 待追加/替换的query参数
 * @param {Boolean} replaced 存在相同的query参数是否替换
 * @returns
 */
export const appendUrlQuery = function (url = '', addedQuery = {}, replaced = true) {
  const parser = /^((?:https?):\/\/[^\/?#]+)(?:(\/[^?#]+))?(\?[^#]+)?(#.+)?$/g;
  const ret = parser.exec(url);
  const query = ret[3] ? qs.parse(ret[3]) : {};
  for (const k in addedQuery) {
    if (Object.prototype.hasOwnProperty.call(query, k) && !replaced) continue;
    query[k] = addedQuery[k];
  }
  const queryStr = qs.stringify(query, true);
  const newurl = `${ret[1] || ''}${ret[2] || ''}${queryStr}${ret[4] || ''}`;
  // console.log('newurl:' + newurl);
  return newurl;
};