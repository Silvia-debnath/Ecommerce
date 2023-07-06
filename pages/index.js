import Image from 'next/image'
import Bg from "../public/Background.png"
import Navbar from './components/navbar';
import Card from './components/card'
import CategoryList from './components/categories';
import Footer from './components/footer';
//}

export default function Home() {
  return (

    <main className="mainpage">
    <Navbar/>
    <div className="opacity-100 mb-10 py-70 rounded-xl">
    <Image src={Bg} width = {1900} height = {500}></Image>
    <span></span>
    <span></span>
    <div className='flex flex-wrap  items-center justify-center text-5xl font-semibold tracking-tight text-gray-900 dark:text-whitepy-4 md:pt-20'>
      <h1>HOT DEALS</h1>
    </div>
    </div>
    <CategoryList/>
    <Card/>
    <Card/>
    <Footer/>
    </main>
  )
}
