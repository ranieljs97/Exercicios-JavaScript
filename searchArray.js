/*
Array por Livros por Categoria:
  - Contar numero de categorias e livros por categoria 
  - Mostrar numero de autores
  - Mostrar livros do autor Auguto Cury
  - funcao que recebe nome do autor e retorna os livros desse autor 
*/

const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'Eker'
      },
      {
        title: 'O homem mais rico da Babilonia',
        author: 'Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Kiyosaki e Lechter'
      }
    ]
  },
  {
    category: 'Inteligencia Emocional',
    books: [
      {
        title: 'Voce é insubstituivel',
        author: 'Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altament eficazes',
        author: 'Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

console.log('Total de categorias:', totalCategories)
for (let category of booksByCategory) {
  console.log(
    'Total de livros da categoria:',
    category.category,
    category.books.length,
    'livros'
  )
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log('Total de autores:', authors.length)
}

countAuthors()

function booksOfAuthor(author) {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(', ')} `)
}

booksOfAuthor(`Cury`)
