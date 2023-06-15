import React from "react";

function Usage() {
  return (
    <div className="mt-6">
      <span className="text-xl font-bold flex justify-center text-blue-500 ">
        
        Usage:
       
      </span>

      <div className="lg:flex lg:items-center  overflow-x-auto justify-center border-gray-200 ">
        <table className="rounded-lg  divide-y divide-gray-200 bg-white text-sm">
          <thead  >
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Route
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                  <a href="/api/characters">/api/characters</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Display all characters
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Specefic Character
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700">
                  <a href="/api/characters/harry potter">
                    /api/characters/:character
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
                  <a href="/api/houses">/api/houses</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Display all houses
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Specefic house
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700">
                  <a href="/api/houses/gryffindor">/api/houses/:house</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Info about a specefic house
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Any house name
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  All Spells
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700">
                  <a href="/api/spells">/api/spells</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Display all spells
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Specefic spell
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700">
                  <a href="/api/spells/avada kedavra">/api/spells/:spell</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Info about a specefic spell
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Any spell name
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  All Movies
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700">
                  <a href="/api/movies">/api/movies</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Display all movies
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Specefic movie
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700">
                  <a href="/api/movies/1">/api/movies/:id</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Info about a specefic movie
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Any movie id from 1 to 8
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  All Books
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700">
                  <a href="/api/books">/api/books</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Display all books
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Specefic Book
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-blue-700">
                  <a href="/api/books/3">/api/book/:id</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Info about specefic book
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  Any book id from 1 to 7
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default Usage;

