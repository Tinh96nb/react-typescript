export const getUrlParams = () => {
  const search = window.location.search;
  const hashes = search.slice(search.indexOf('?') + 1).split('&');
  const params = {};
  hashes.map((hash) => {
    const [ key, val ] = hash.split('=');
    params[key] = decodeURIComponent(val);
  });

  return params;
};

export const getModuleName = () => {
  const moduleName = window.location.pathname.replace(/\/(\w+).html.*/, '$1');
  if (moduleName === window.location.pathname) {
    return 'home';
  }
  return moduleName;
};

export const arrayMove = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1;
    k -= 1;
    while (k) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};
