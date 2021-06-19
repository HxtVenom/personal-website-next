import Link from 'next/link'

const name = "Ricardo Ruiz"

const Pages = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Projects",
    url: "/"
  },
  {
    name: "About Me",
    url: "/"
  }
]

export default function NavBar()  {
  return (
    <div className="bg-gray-50 bg-opacity-100 dark:bg-gray-800 shadow-md inset-x-0 top-0 flex flex-wrap mb-2 fixed">

      {/* NavBar Name */}
      <div className="p-3 ml-1 text-lg font-bold">{name}</div>

      {/* Menu Toggle for Mobile */}
      <style jsx>
        {`
          #menu-toggle:checked + #menu {
            display: block;
          }
        `}
      </style>
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden p-4 block absolute right-1"><svg className="fill-current text-current hover:text-green-500 hover:opacity-75" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
      <input className="hidden" type="checkbox" id="menu-toggle"/>

      {/* Menu */}
      <div className="hidden md:flex md:items-center md:w-auto md:mr-2 md:space-x-2 md:absolute md:right-0 w-full" id="menu">
        <div className="md:flex">
          {
            Pages.map( page => {
              return <div key={page.name} className="m-0.5 p-3 hover:text-green-500 hover:border-solid md:hover:border-b-2 md:hover:border-r-0 hover:border-current hover:opacity-75 hover:border-r-2"><Link href={page.url}>{page.name}</Link></div>
            })
          }
        </div>
      </div>

    </div>
  )
}