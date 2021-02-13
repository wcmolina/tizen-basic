// Remove undefined keys from object
export const cleanObject = (o) =>
  Object.keys(o).reduce(
    (a, k) => Object.assign(a, o[k] !== undefined ? { [k]: o[k] } : {}),
    {}
  );

export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + " [\u2026]" : str;
};
