import Navbar from "./Navbar";
import Hero from "./Hero";
import Breadcrumb from "./Breadcrumb";

export default function Layout({ children, hero = true }) {




  return (
    <>
      <header className="sticky top-0 z-30 md:relative">
        <Navbar />
        {hero &&
        <Hero /> || <Breadcrumb />}
      </header>

      <main className="mx-auto max-w-6xl">

        <div className="">
          {children}
        </div>

      </main>
    </>
  )
}
