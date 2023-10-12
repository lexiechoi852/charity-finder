import { useEffect, useState } from "react";
import { getCharities } from "../api/charities";
import CharityList from "../components/CharityList";
import { Charity } from "../types/charity";
import causes from "../assets/charity-causes";
import image from '../assets/charity.jpeg'

export default function HomePage() {
    const [charities, setCharities] = useState<Charity[]>([]);

    useEffect(() => {

      loadCharities();
    }, []);

    const loadCharities = async() => {
      const random = Math.floor(Math.random() * causes.length)
      const data = await getCharities(causes[random]);
      if (data) {
        setCharities(data.nonprofits);
      }
    }
    return (
      <div className='flex flex-col'>
        <div className="max-h-[500px] overflow-hidden">
          <img className="object-cover" src={image} alt="image" />
        </div>
        <h3 className="my-4 font-semibold text-2xl text-gray-700">You May Interest</h3>
        <CharityList charities={charities} />
      </div>
    )
}
