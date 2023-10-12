import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharity } from '../api/charities';
import { Charity, CharityDetail, NonprofitTag } from '../types/charity';

export default function CharityDetail() {
  const [charity, setCharity] = useState<CharityDetail>();
  const [charityTags, setCharityTags] = useState<NonprofitTag[]>();
  const [favorites, setFavorites] = useState<Charity[]>([]);
  const [recentlyAdded, setRecentlyAdded] = useState<boolean>(false);

  const { id } = useParams(); 

  useEffect(() => {
    const loadCharity = async () => {
      if (id) {
        const data = await getCharity(id)
        if (data) {
          setCharity(data.data.nonprofit)
          setCharityTags(data.data.nonprofitTags)
          console.log(data.data.nonprofit, 'nonprofit');
        }  
      }
    }
    loadCharity()
    getFavorites()
  }, [id])

  const getFavorites = () => {
    const storage = localStorage.getItem('Favorites')
    if (storage) {
      setFavorites(JSON.parse(storage))
    }
  }

  const addFavorite = () => {
    const isFavorite = favorites.find((favorite) => favorite.ein === charity!.ein)
    if (isFavorite) {
      setRecentlyAdded(false)
      const newFavorites = favorites.filter((favorite) => favorite.ein !== isFavorite.ein)
      setFavorites(newFavorites)
      localStorage.setItem('Favorites', JSON.stringify(newFavorites))
    } else {
      setRecentlyAdded(true)
      const newFavorite = {
        ein: charity!.ein,
        name: charity!.name,
        logoUrl: charity!.logoUrl,
        location: charity!.locationAddress
      }
      const newFavorites = favorites.concat(newFavorite)
      setFavorites(newFavorites)
      localStorage.setItem('Favorites', JSON.stringify(newFavorites))
    }
  }

  const isFavorite = () => {
    const isFavorite = favorites.find((favorite) => favorite.ein === charity!.ein)
    return !!isFavorite
  }

  return (
    <div className='w-full flex justify-center'>
      { charity ? (
        <div className='flex flex-col md:flex-row gap-8'>
          <div className="p-5 flex flex-col gap-4 max-w-md lg:max-w-3xl bg-white border border-gray-200 rounded-lg shadow">
            {charity.coverImageUrl && <img className="rounded-t-lg" src={charity.coverImageUrl} alt={charity.name} />}
            <div className="flex gap-2 items-center">
              {
                charity.logoUrl ? (
                    <img src={charity.logoUrl} alt={charity.name} />
                ) : (
                    <svg
                        className="h-6 w-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 15V9m4 6V9m4 6V9m4 6V9M2 16h16M1 19h18M2 7v1h16V7l-8-6-8 6Z"
                        />
                    </svg>
                )
              }
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">{charity.name}</h5>
            </div>
            <div className='flex gap-2'>
              <svg
                className="h-6 w-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              <div>{charity.locationAddress}</div>
            </div>
            <p className="font-normal text-left text-gray-700">{charity.description}</p>
          </div>
          <div className="p-5 flex flex-col gap-4 min-w-[300px] bg-white border border-gray-200 rounded-lg shadow">
            <div className='flex flex-col'>
              {recentlyAdded && (
                <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                  <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>This Charity Added To Your Favorite !
                </div>
                </div>
              )}
              <button 
                type="button"
                onClick={addFavorite}
                className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              >
                {isFavorite() ? "Remove from favorites" : "Add to favorites"}
              </button>
              <a 
                href={charity.profileUrl}
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              >
                Check it out on Every.org
              </a>
             {charity.websiteUrl && (
                <a 
                  href={charity.websiteUrl}
                  className="focus:outline-none text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                  Official Website
                </a>
              )}
            </div>
            <div className='flex flex-col gap-2 text-left'>
              <div className=''>Tag:</div>
              <div className='flex flex-wrap gap-2'>
                {
                  charityTags && charityTags.map((charityTag) => (
                    <div 
                      key={charityTag.id}
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-500 rounded-full"
                    >
                      {charityTag.tagName}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
