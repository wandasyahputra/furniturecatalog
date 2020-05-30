export const arrayToString = (value) => {
  let text = ''
  for(let i = 0; i < value.length; i++) {
    text += value[i]
    if (i !== value.length - 1) {
      text += ', '
    }
  }
  return (text)
}