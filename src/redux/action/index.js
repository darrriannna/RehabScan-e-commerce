export const addCart = (item) => {
  console.log("Dispatching ADDITEM:", item);
  return {
    type: "ADDITEM",
    payload: item
  };
};

export const delCart = (item) => {
  return {
    type: "DELITEM",
    payload: item
  };
};

