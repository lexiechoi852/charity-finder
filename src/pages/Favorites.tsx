import { useEffect, useState } from "react";
import CharityList from "../components/CharityList";
import { Charity } from "../types/charity";

export default function Favorites() {
  useEffect(() => {
    const storage = localStorage.getItem('Favorites')
    if (storage) {
      setFavorites(JSON.parse(storage))
    }
  }, [])
  const [favorites, setFavorites] = useState<Charity[]>([]);

  return (
    <div className="p-6">
        { favorites.length > 0 
            ?  (
                <div>
                    <div className="font-semibold text-3xl text-left">Favorites</div>
                    <CharityList charities={favorites} /> 
                </div>
            )
            : (
                <div className="mt-32 text-2xl text-gray-500">
                    No Favorites Yet
                </div>
            )
        }
    </div>
  )
}
