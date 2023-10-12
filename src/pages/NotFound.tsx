import notFoundLogo from '../assets/not-found.svg'

export default function NotFound() {
  return (
    <div className="flex flex-col">
      <div className='flex justify-center'>
        <img className="w-48" src={notFoundLogo} alt="Not Found Icon" />
      </div>
      <div className="text-2xl text-gray-800">Oops, looks like the page is lost.</div>
      <div className="text-xl text-gray-600">This is not a fault, just an accident that was not intentional.</div>
    </div>
  )
}
