export const numberFormat = (value) => {
  return (
    value
      .toFixed(0)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  )
}