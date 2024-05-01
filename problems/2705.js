// Goes much slower than other examples, but I prefer relying on standard
// behavior rather than reinventing the wheel and the replacer function in
// JSON.stringify just needed some slight tweaking to do the job.

const compactObject = (oldObj) => {
  if (Array.isArray(oldObj)) {
    return oldObj
      .filter((elem) => elem ? true : false)
      .map((elem) => compactObject(elem));
  }

  return JSON.parse(JSON.stringify(oldObj, (key, value) => {
    if (!key) return value;

    return value ? compactObject(value) : undefined;
  }));
};

const testObj = [null, 0, 5, [0], [false, 16]];
// const testObj = [null, 0, false, 1];
// const testObj = { bob: 5, jane: 0 };
// const testObj = {"a": null, "b": [false, 1]};

console.log(compactObject(testObj));
