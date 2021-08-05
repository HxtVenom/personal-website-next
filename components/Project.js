import Image from 'next/image'
import Social from './Social'

export default function Project({project}) {
  return (
    <div className="m-auto bg-gray-50 dark:bg-gray-800 shadow-md flex md:flex-row flex-col md:max-w-7xl">
      {/* Top of Project Card */}
      {project.img &&
        <div className="max-w-xl max-h-max md:h-auto h-64 w-full relative">
          <Image src={project.img} objectFit="contain" layout="fill"/>
        </div>
      }
      {/* Content of Card */}
      <div className={`p-2 m-2 flex-col ${(project.img) ? "md:border-l-2" : ""}`}>
        {/* Project Name */}
        <div className=" p-1 flex border-b-2 items-center"> 
          <h2 className="text-lg text-green-700 font-bold">{project.name}</h2>
        </div>
        {/* Project Description */}
        <div className="px-1">
          <h3 className="font-bold border-b-2 border-green-500">Description</h3>
          <p>{project.description}</p>
        </div>
        {/* Project Responsibilities */}
        <div className="px-1">
          <h3 className="font-bold border-b-2 border-green-700 border-opacity-500">Responsibilities</h3>
          <ul className="pl-4 list-square flex-initial">
            {
            project.duties.map((duty, idx) => {
              return <li className="text-green-500" key={idx}><div className="text-gray-800">{duty}</div></li>
            })
            }
          </ul>
        </div>
        {/* Project Links */
        (project.links.length > 0) &&
          <div className="mt-2">
            <h3 className="font-bold border-b-2 border-green-500">Project Links</h3>
            <div className="mt-2">
              <Social socials={project.links} size={36}/>
            </div>
          </div>
        }
        </div>
    </div>
  )
}