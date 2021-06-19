import Social from "./Social"

const Socials = [
  {
    link: "https://www.github.com/HxtVenom",
    name: "github"
  },
  {
    link: "https://www.linkedin.com/in/ricardoruiz12",
    name:"linkedin"
  },
  {
    link: "mailto:ricardo@rruiz.dev",
    name: 'email'
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 shadow-top-md text-current w-screen jusfify-around space-y-2 flex flex-wrap items-center py-2">
      
      {/* Container in which Icons Exist */}
      <div className="md:ml-1 px-3 flex space-x-2 justify-between md:m-0 mx-auto">
        <Social socials={Socials} size={36}/>
      </div>
      
      {/* Container for Other Writing */}
      <div className="flex md:items-center md:w-auto md:pr-3 md:mr-2 md:space-x-2 md:absolute md:right-0 w-full">
        <p className="md:mb-2 opacity-25 mx-auto text-xs">Copyright&copy; Ricardo Ruiz. All Rights Reserved.</p>
      </div>
      
    </footer>
  )
}