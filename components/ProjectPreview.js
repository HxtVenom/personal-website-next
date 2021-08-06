import Link from 'next/link'
import Image from 'next/image'

export default function ProjectPreview({project}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 shadow-md flex flex-col md:max-w-max w-full mb-2 mx-2">
       {/* Top of Project Card */}
      {project.img &&
        <div className="max-w-xl max-h-max h-64 w-full relative">
          <Image src={project.img} objectFit="contain" layout="fill"/>
        </div>
      }
      <div className="p-2 m-2 flex-col">
      {/* Project Name/Link */}
        <Link href={`/projects/${project.id}`}>
          <div className="hover:cursor-pointer hover:text-green-500 p-1 flex justify-between text-green-700 font-bold border-b-2 items-center"> 
            <h2 className="text-lg">{project.name}</h2>
            <h2 className="inset-y-0 right-0 text-xl">&rarr;</h2>
          </div>
        </Link>

        <div className="px-1">
          <h3 className="font-bold border-b-2 border-green-700">Description</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}