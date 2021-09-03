import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 dark:bg-gray-700 dark:text-gray-200">
      <NavBar />
      <div className="w-full bg-gray-200 dark:bg-gray-700 pt-16 flex-grow pb-4 px-4">
        <main className="mx-auto lg:max-w-screen-2xl ">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

