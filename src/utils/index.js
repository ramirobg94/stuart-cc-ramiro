export const prepareBody = (params) => {
  let formBody = []
  for (var property in params) {
    let encodedKey = encodeURIComponent(property)
    let encodedValue = encodeURIComponent(params[property])
    formBody.push(encodedKey + '=' + encodedValue)
  }
  return formBody.join('&')
}