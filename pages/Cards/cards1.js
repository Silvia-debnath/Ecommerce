import Image from 'next/image'
import React from 'react';

export const getStaticProps = async () => {
    const res = await fetch ("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data)
    return {
      props: { data,
      },
    };
  };


  const Cards1 = ({data}) =>
  {
    return (
        
        <div className="cards">
            
           <div class="text-5xl"><h1>Testing</h1></div>
           
           </div>
    )}

    export default Cards1;