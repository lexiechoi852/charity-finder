import { useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import causes from "../assets/charity-causes"

export default function Search() {
  const [value, setValue] = useState<string>('')
  const [displayResult, setDisplayResult] = useState<boolean>(false)
  const [searchResult, setSearchResult] = useState<string[]>([])

  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname.includes('search')) {
      setValue('')
    }
  }, [location.pathname])

  const search = (input: string) => {
    setValue(input)
    if (input === '') {
      setDisplayResult(false)
      return
    }

    setDisplayResult(true)
    const results = causes.filter((cause) => cause.includes(input)).slice(0, 10)
    if (results) setSearchResult(results)
  }

  return (
    <div className="relative flex flex-col">
      <input 
        type="text"
        value={value}
        placeholder="Find a Charity"
        onChange={(e) => search(e.target.value)} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      {
        displayResult && searchResult && (
          <div className="absolute w-full min-h-[100px] max-h-md border rounded-lg bg-white top-[42px]">
            <div className="m-2 flex flex-wrap gap-2">
              {
                searchResult.length > 0 && (
                  searchResult.map((result) => (
                    <Link
                      to={`/search/${result}`}
                      key={result}
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center bg-gray-300 rounded-full"
                    >
                      {result}
                    </Link>
                  ))
                )
              }
            </div>
          </div>
        )
      }
    </div>
  )
}
