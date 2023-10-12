import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharities } from "../api/charities";
import { Charity } from '../types/charity';
import CharityList from '../components/CharityList';

export default function SearchResult() {
  const [charities, setCharities] = useState<Charity[]>([])

  const { keyword } = useParams()

  useEffect(() => {
    const loadCharities = async() => {
      const data = await getCharities(keyword!)
      if (data) {
        setCharities(data.nonprofits)
      }
    }
    loadCharities();
  }, [keyword]);
  
  return (
    <div className='flex flex-col gap-5 p-6'>
        <div className="flex font-semibold text-3xl text-left">
            <div>Search results for:</div>
            { keyword && <div> {keyword}</div>}
        </div>
        <CharityList charities={charities} />
    </div>
  )
}
