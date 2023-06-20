import Image from 'next/image'
import carousel from "./pages/public/background18.jpg"

export const getStaticProps = async () => {
    const res = await fetch ("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data)
    return {
      props: { data
      }
    }
  }

  const Cards = ({data}) =>
  {
    return (
        <div className="cards">
           <div class="text-5xl"><h1>Testing</h1></div>
        { data.map((index) => {
            return (
                 <div key = {index.id} className = "products">
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-5 h-96 mx-7">
    <a href="#">
        <Image className="p-8 rounded-t-lg" src={carousel} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{index.title}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{index.price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
            </div>
            );
        }
           

       
        )}
     </div>
    )
  }

  export default Cards;