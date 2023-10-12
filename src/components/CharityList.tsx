import { Link } from "react-router-dom"
import { Charity } from "../types/charity"

interface CharityListProps {
    charities: Charity[]
}

export default function CharityList({ charities }: CharityListProps) {
  return (
    <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                charities.length > 0 && charities.map((charity) => (
                    <Link
                        key={charity.ein}
                        to={`/charity/${charity.ein}`} 
                        className="flex flex-col gap-3 rounded-lg bg-white p-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-gray-100"
                    >
                        <div className="flex gap-5 items-center" key={charity.ein}>
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
                            <h5
                                className="text-xl font-medium leading-tight text-neutral-800">
                                {charity.name}
                            </h5>
                        </div>
                        <div className="w-full my-3 border-b border-gray-300"></div>
                        <div className="h-full flex items-center gap-3 mb-2 text-base text-left text-neutral-600">
                            <svg
                                className="h-6 w-6 text-gray-800"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 20"
                            >
                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                            </svg>
                            <div>{charity.location}</div>
                        </div>
                </Link>
                ))
            }
        </div>
    </div>
  )
}
