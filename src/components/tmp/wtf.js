function SegmentTree(arr) {
  this.arr = arr;

  let size = 1;
  while (size <= arr.length) {
    size <<= 1;
  }

  size *= 2; // hmmm, because of build?

  console.log("size:", size);

  this.data = Array(size);
}

SegmentTree.prototype.build = function (v, tl, tr) {
  if (tl === tr) {
    this.data[v] = this.arr[tl];
  } else {
    let tm = (tl + tr) >> 1;
    this.build(2 * v, tl, tm);
    this.build(2 * v + 1, tm + 1, tr);
    this.data[v] = this.data[2 * v] + this.data[2 * v + 1];
  }
};

let total = 0;
SegmentTree.prototype.sum = function (v, tl, tr, l, r) {
  total++;
  console.log("times called:", total);
  if (l > r) {
    return 0;
  }

  if (tl === r && tl === l) {
    return this.data[v];
  }

  let tm = (tl + tr) >> 1;
  return (
    this.sum(2 * v, tl, tm, l, Math.min(tm, r)) +
    this.sum(2 * v + 1, tm + 1, tr, Math.max(tm + 1, l), r)
  );
};

module.exports = SegmentTree;
