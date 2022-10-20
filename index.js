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

function reverse2(str){
  return str.split('').reverse().join('')
}

const reverse3 = (str) => [...str].reverse().join('')

console.log(reverse3("hello hello"))