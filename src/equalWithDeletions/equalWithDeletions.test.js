import { equalWithDeletions as f, getInput } from './equalWithDeletions.mjs'

test('Basics', () => {
  expect(f('###%%', '')).toBe(true)
  expect(f('fi##f%%%th %%year #time###', 'fifth year time')).toBe(false)
  expect(f('a##x', '#a#x')).toBe(true)
})

test('getInput', () => {
  expect(getInput('###%%')).toBe('')
  expect(getInput('fi##f%%%th %%year #time###')).toBe('fart')
  expect(getInput('a##x')).toBe('x')
})
