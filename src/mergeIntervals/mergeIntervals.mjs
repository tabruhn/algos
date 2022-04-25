/*
 * Given an array of intervals, merge the overlapping intervals, and return an array of the resulting intervals.
 */

export function mergeIntervals (intervals) {
  // Faster if sorted
  const sortedIntervals = sortArr(intervals)

  return sortedIntervals.reduce((prev, [first, last]) => {
    if (prev.length < 1) return [[first, last]]

    // Split current list into the last set (endSet) and rest of the list items
    const [endSet, ...rest] = prev.reverse()

    // If first element is greater than the last element of the ending set
    return (first > endSet[1])
      // We cannot merge, we add the new set to the list along with the endSet
      ? [...rest, endSet, [first, last]]
      // We can merge
      : [...rest, [endSet[0], last]]
  }, [])
}

const sortArr = (arrs) => arrs.sort((pre, next) => pre[0] - next[0])
