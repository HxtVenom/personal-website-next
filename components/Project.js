import Image from 'next/image'
import Link from 'next/link'
import Social from './Social'

export default function Project({project}) {
  return (
    <div className={`bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg ${(project.img) ? "lg:w-full" : "lg:w-auto"} md:w-full overflow-hidden`}>
      <div className="flex md:flex-row flex-col">
        {/* Top of Project Card */}
        {project.img &&
          <div className="max-w-xl max-h-max md:h-auto h-64 w-full relative">
            <Image src={project.img} objectFit="contain" layout="fill"/>
          </div>
        }
        {/* Content of Card */}
        <div className={`mb-2 w-full flex-col ${(project.img) ? "md:border-l-2" : ""}`}>
          {/* Project Name */}
          <Link href={`/projects/${project.id}`}>
            <div className=" bg-gray-100 p-2 md:pb-2 pb-1 px-3 hover:cursor-pointer hover:text-green-500 flex justify-between text-green-700 font-bold items-center"> 
              <h2 className="text-xl">{project.name}</h2>
              <h2 className="inset-y-0 right-0 text-xl pr-1">&rarr;</h2>
            </div>
          </Link>
          {/* Project Description */}
          <div className="px-3">
            <h3 className="font-bold">Description</h3>
            <p>{project.description}</p>
          </div>
          {/* Project Responsibilities */}
            <div className="px-3">
              <h3 className="font-bold">Responsibilities</h3>
              <ul className="pl-4 list-square flex-initial">
                {
                project.duties.map((duty, idx) => {
                  return <li className="text-green-500" key={idx}><div className="text-gray-800">{duty}</div></li>
                })
                }
              </ul>
            </div>
          </div>
        </div>
        {/* Project Links */
        (project.links.length > 0) &&
          <div className="px-3 py-1 bg-gray-100 flex justify-between items-center">
              <h3 className="font-bold opacity-50">Project Links</h3>
              <div className="right-0 inset-y-0 opacity-50">
                <Social socials={project.links} size={36}/>
              </div>
          </div>
      }
    </div>
  )
}