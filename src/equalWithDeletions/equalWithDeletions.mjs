/*
 * Given two strings n and m, return true if they are equal when both are entered into text editors. But: a # means a backspace character (deleting backwards), and a % means a delete character (deleting forwards).
 */

export function equalWithDeletions (x, y) {
  return getInput(x) === getInput(y)
}

export function getInput (s) {
  let value = ''
  let ignoreChars = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '#') {
      if (value.length > 0) {
        value = value.slice(0, value.length - 1)
      }
    } else if (c === '%') {
      ignoreChars++
    } else {
      if (ignoreChars > 0) {
        ignoreChars--
      } else {
        value += c
      }
    }
  }
  return value
}
