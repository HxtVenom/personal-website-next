import Image from 'next/image'

export default function Project() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 shadow-md flex md:flex-row flex-col md:max-w-7xl">
      {/* Top of Project Card */}
      <div className="md:h-full md:max-w-3/12 md:min-w-64 h-64 w-full relative">
          <Image src="/../public/Screen2.png" objectFit="cover" layout="fill"/>
      </div>
      {/* Content of Card */}
      <div className="p-2 m-2 flex-col md:border-l-2">
        <div className=" p-1 flex border-b-2 items-center"> 
          <h2 className="text-lg text-green-700 font-bold">Project Name</h2>
        </div>
          <div className="px-1">
            <h3 className="font-bold border-b-2 border-green-500">Description</h3>
            <p>Project was based off of this this and this.</p>
          </div>
          <div className="px-1">
            <h3 className="font-bold border-b-2 border-green-700 border-opacity-500">Responsibilities</h3>
            <ul className="pl-4 list-square flex-initial">
              <li className="text-green-500"><div className="text-gray-800">Created backend endpoints using Next.js and Express. Also continued on to add functionality for websocket communication</div></li>
              <li>Did this</li>
              <li>Did this</li>
              <li>Did this</li>
            </ul>
          </div>
        </div>
    </div>
  )
}