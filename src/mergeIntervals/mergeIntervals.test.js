import { mergeIntervals as f } from './mergeIntervals.mjs'

test('Basics', () => {
  expect(f([[1, 4], [2, 6], [8, 10], [15, 20]])).toEqual([[1, 6], [8, 10], [15, 20]])
  expect(f([[1, 2], [2, 7]])).toEqual([[1, 7]])
  expect(f([[-1, 2], [2, 7]])).toEqual([[-1, 7]])
  expect(f([[15, 20], [8, 10], [2, 6], [1, 4]])).toEqual([[1, 6], [8, 10], [15, 20]])
})
