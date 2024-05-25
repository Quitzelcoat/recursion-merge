function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  if (left.length === 0) {
    return right;
  } else if (right.length === 0) {
    return left;
  } else if (left[0] < right[0]) {
    return [left[0]].concat(merge(left.slice(1), right));
  } else {
    return [right[0]].concat(merge(left, right.slice(1)));
  }
}

console.log(mergeSort([3, 5, 6, 87, 99, 1, 3, 5]));
