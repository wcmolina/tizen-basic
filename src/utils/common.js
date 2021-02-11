// Remove undefined keys from object
export const cleanObject = (o) =>
  Object.keys(o).reduce(
    (a, k) => Object.assign(a, o[k] !== undefined ? { [k]: o[k] } : {}),
    {}
  );
