const reverseString = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string'){
    return "Make sure you provide proper information"
  }

  let arrayOfChars = str.split('')
  let resultArr = []
  while(arrayOfChars.length > 0){
    let lastChar = arrayOfChars.pop()
    resultArr.push(lastChar)
  }
  finalString = resultArr.join('')
  return finalString
}

console.log(reverseString("I"))