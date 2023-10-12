import { Outlet, Link } from 'react-router-dom';
import Search from './Search';

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className='flex flex-col md:flex-row gap-6 items-center p-6'>
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to="/">Charity Finder</Link>
        </h1>
        <div className='mx-auto min-w-[300px]'>
          <Search />
        </div>
        <Link to="/favorites" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200">Favorites</Link>
      </div>
      <Outlet />
    </div>
  )
}
