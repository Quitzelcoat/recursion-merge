// Fib sequence iteration
function fibs(arr) {
  let fibSequence = [0, 1];
  for (let i = 2; i < arr; i++) {
    let nextNum = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextNum);
  }
  return fibSequence;
}

console.log(fibs(10));

// Fib sequence recursion
function fibsRec(n, arr = [0, 1]) {
  if (arr.length >= n) {
    return arr.slice(0, n);
  }

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(n, arr);
}

console.log(fibsRec(8));

// fibonacci recursion only ans
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
