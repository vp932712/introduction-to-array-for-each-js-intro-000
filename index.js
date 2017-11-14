// Add your doToElementsInArray() function here:
function doToElementsInArray(array){
array.foEach(changeCompletely(element){
return element;
})
}

// Add your changeCompletely() function here:
function changeCompletely(array){
array.forEach(function(element){
  return element+element;
})
}
