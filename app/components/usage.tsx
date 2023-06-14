import React from 'react'

function Usage() {
  return (
    <div className='mt-10' >
        <>

<span className='text-xl font-bold flex justify-center text-green-400 mb-2'>How to use this API:</span>

  <div className="w-fit mx-auto   rounded-lg border border-gray-200">
    <table className="w-fit divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Route
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Usage
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Parameter
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           All Characters
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href='/api/characters'>
            /api/characters
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            Display all characters
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
           -
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Specefic Character
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/characters/harry potter">
            /api/characters/harry potter
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
           Info about a specific character
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
           Any character name
          </td>
        </tr>
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           All Houses
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/houses">
            /api/houses
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Display all houses</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
        </tr>
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           Specefic house
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/houses/gryffindor">
            /api/houses/gryffindor
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Info about a specefic house</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Any house name</td>
          
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           All Spells
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/spells">
            /api/spells
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Display all spells</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           Specefic spell
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/spells/avada kedavra">
            /api/spells/avada kedavra
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Info about a specefic spell</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Any spell name</td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          All Movies
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/movies">
            /api/movies
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Display all movies</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
        </tr>


        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           Specefic movie
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/movies/1">
            /api/movies/1
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Info about a specefic movie</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Any movie id from 1 to 8</td>
        </tr>


        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          All Books
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/books">
            /api/books
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Display all books</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
        </tr>


        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
           Specefic Book
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-blue-700">
            <a href="/api/books/3">
            /api/books/3
            </a>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Info about  specefic book</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Any book id from 1 to 7</td>
        </tr>


      </tbody>
    </table>
  </div>
</>

    </div>
  )
}

export default Usage
