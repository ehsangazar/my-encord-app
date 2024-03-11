const getArray = (item) => {
  return Array.isArray(item) ? item : [item];
};

export default getArray;
