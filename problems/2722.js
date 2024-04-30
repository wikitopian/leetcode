const join = (arr1, arr2, ids = {}) => {
  arr1.forEach((item) => ids[item.id] = item);

  arr2.forEach((item) => {
    if (item.id in ids) ids[item.id] = Object.assign(ids[item.id], item);
    else ids[item.id] = item;
  });

  return Object.values(ids);
};

/* Mine:
const join = (a1, a2) => [...a1, ...a2]
  .reduce((combined, elem) => {
    combined[elem.id] = { ...combined[elem.id], ...elem };

    return combined;
  }, [])
  .filter((elem) => elem !== undefined);
*/

const arr1 = [
  {"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}
];

const arr2 = [{"id":1,"o":48,"z":84,"y":61}];

console.log(join(arr1, arr2));

/*
  i am #1, leet is #2

1: {"id":1,"x":36,"d":26,"f":35}
2: {"d":26,"f":35,"id":1,"x":36}

1: {"id":3,"c":20,"z":75}
2: {"c":20,"id":3,"z":75}

1: {"id":2,"o":48,"z":84,"y":61}
2: {"id":2,"o":48,"y":61,"z":84}
*/
