export function parseQueryItem (item) {
  const [key, value] = item.split('=')
  return {
    [key]: value
  }
}

function parseQueryStrings (search) {
  // "?token=asdfghjk87654"
  if (!search) return {}
  const elems = search.slice(1).split(';')
  return elems.map(parseQueryItem).reduce((prev, next) => Object.assign(prev, next), {})
}

export default parseQueryStrings
