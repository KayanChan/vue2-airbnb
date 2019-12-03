const colors = [
  '#ff972b',
  '#739397',
  '#ff5a5f',
  '#ffb400',
  '#60b6b5'
]
export default function randomBgColor () {
  return colors[Math.floor(Math.random()*(colors.length)+1)]
}