let family = {
  incomes: [1100, 2000],
  expenses: [1000, 200, 300, 400, 600]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)
  const total = calculateIncomes - calculateExpenses

  const positive = total >= 0

  if (positive) {
    result = 'Seu saldo é positivo'
  } else {
    result = 'Seu saldo é negativo'
  }

  console.log(`${result} : ${total}`)
}

calculateBalance()
