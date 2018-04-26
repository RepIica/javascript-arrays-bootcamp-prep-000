var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr,n) {
  return [n, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, n){
  arr.unshift(n)
  return arr
}
function addElementToEndOfArray(arr,n) {
  return newArr
}
function accessElementInArray(arr, index) {
  return arr[index]
}
function destructivelyRemoveElementFromBeginningOfArray(arr,n) {
  arr.shift(n)
  return arr
}
function removeElementFromBeginningOfArray(arr) {
  newArr = arr.slice(1)
  return newArr
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  newArr = arr
  return newArr
}
function removeElementFromEndOfArray(arr) {
  arr.slice(0, arr.length-1)
  newArr = arr
  return newArr
}