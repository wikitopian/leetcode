Array.prototype.groupBy = function groupBy(by) {
  return this.reduce((prev, curr) => {
    const grp = by(curr);

    Array.isArray(prev[grp]) ? prev[grp].push(curr) : prev[grp] = [curr];

    return prev;
  }, {});
};

console.log([1, 2, 3].groupBy(String));
