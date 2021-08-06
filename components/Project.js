import Image from 'next/image'
import Link from 'next/link'
import Social from './Social'

export default function Project({project}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 shadow-md flex md:flex-row flex-col max-w-max mb-2 m-auto">
      {/* Top of Project Card */}
      {project.img &&
        <div className="max-w-xl max-h-max md:h-auto h-64 w-full relative">
          <Image src={project.img} objectFit="contain" layout="fill"/>
        </div>
      }
      {/* Content of Card */}
      <div className={`p-2 m-2 flex-col ${(project.img) ? "md:border-l-2" : ""}`}>
        {/* Project Name */}
        <Link href={`/projects/${project.id}`}>
          <div className="hover:cursor-pointer hover:text-green-500 p-1 flex justify-between text-green-700 font-bold border-b-2 items-center"> 
            <h2 className="text-lg">{project.name}</h2>
            <h2 className="inset-y-0 right-0 text-xl">&rarr;</h2>
          </div>
        </Link>
        {/* Project Description */}
        <div className="px-1">
          <h3 className="font-bold border-b-2 border-green-700">Description</h3>
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