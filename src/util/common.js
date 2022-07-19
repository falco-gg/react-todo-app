/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     The object.
 * @param  {Array}             Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
export function objectWithOnly(object, attrs) {
  let newObject = {}

  attrs.forEach((attr) => {
    newObject[attr] = object[attr].bind(object)
  })

  return newObject
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringIncludes(str, substr) {
  return str.indexOf(substr) !== -1
}
