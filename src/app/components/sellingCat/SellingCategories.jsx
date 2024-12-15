import suit from './SellingCatImg/suit.svg';
import blackTop from './SellingCatImg/utranetTop.svg';
import redShirt from './SellingCatImg/redShirt.svg';
import hoodies from './SellingCatImg/hoodies.svg';
import caps from './SellingCatImg/caps.svg';
import shortNikka from './SellingCatImg/shorts.svg';
import SellingCard from './SellingCard';
export default function SellingCategories() {
  const clothsAndTheirNames = [
    {img:suit, clothName: "suit"},
    {img:blackTop, clothName: "Tees"},
    {img:redShirt, clothName: "Shirt"},
    {img:hoodies, clothName: "Hoodies"},
    {img:caps, clothName: "Caps"},
    {img:shortNikka, clothName: "Shorts"}
  ]
  return (
    <div className="px-20 py-8">
        <h1 className="font-extrabold font-metropolisFont text-2xl">Best Selling categories</h1>
        <div className='grid grid-cols-6 gap-10 mt-10'>
          {clothsAndTheirNames.map((products,index) => (
            <>
              <SellingCard 
                cloth={products.img}
                key={index}
                nameOfCloth={products.clothName}
              />
            </>
          ))}
        </div>
    </div>
  )
}
