import { largestSubarraySum as f } from './largestSubarraySum.mjs'

test('Basics', () => {
  expect(f([3, 1, 4, 1, 5, 9, 2, 6], 3)).toEqual([9, 2, 6])
  expect(f([9, 9, 4, 1, 5, 9, 2, 6], 2)).toEqual([9, 9])
  expect(f([0, 0, 4, 1, 5, 9, 9, 9], 2)).toEqual([9, 9])
  expect(f([0, 0], 2)).toEqual([0, 0])
})
