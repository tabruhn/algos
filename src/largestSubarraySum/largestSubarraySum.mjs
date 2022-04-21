/*
 * Given an unsorted array of integers and a number n, find the subarray of length n that has the largest sum.
 */

export function largestSubarraySum (x, y) {
  let largest = x.slice(0, y)
  const sum = arr => arr.reduce((a, b) => a + b, 0)
  for (let n = 0; n <= x.length - y; n++) {
    const newList = x.slice(n, n + y)
    if (sum(largest) < sum(newList)) {
      largest = newList
    }
  }
  return largest
}
