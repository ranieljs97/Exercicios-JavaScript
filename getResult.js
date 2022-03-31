// Transformar notas numéricas em String

function getResult(x) {
  let result

  if (x >= 90 && x <= 100) {
    result = `A`
  } else if (x > 80 && x < 89) {
    result = `B`
  } else if (x > 70 && x < 79) {
    result = `C`
  } else if (x > 60 && x < 69) {
    result = `D`
  } else if (x < 60) {
    result = `F`
  } else {
    result = 'Nota inválida'
  }
  return result
}

console.log(getResult(43))
console.log(getResult(68))
console.log(getResult(78))
console.log(getResult(93))
console.log(getResult(54))
console.log(getResult(108))
