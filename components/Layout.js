import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout ({children}){
  return (
    <div className="text-gray-800 dark:bg-gray-700 dark:text-gray-200 flex flex-col min-h-screen">
      <NavBar/>
      <main className="bg-gray-100 dark:bg-gray-700 pt-16 px-6 flex-grow pb-4">
        {children}
      </main>
      <Footer/>
    </div>
  )
}