import cargoPant from './MenCatImages/cargoPant.svg';
import blueTop from './MenCatImages/blueTop.svg';
import brownHoodie from './MenCatImages/brownHoodie.svg';
import bowTie from './MenCatImages/bowTie.svg';
import utranet from './MenCatImages/utranetTop.svg';
import vintage from './MenCatImages/vintage.svg';
import MenCategoriesPattern from './MenCategoriesPattern';
export default function MenStore() {
    const mensProducts = [
        {imgs:cargoPant, goods:"Cargo pants", priceOfProduct: "$25"},
        {imgs:blueTop, goods: "Round neck", priceOfProduct: "$25"},
        {imgs:brownHoodie, goods: "Hoodie", priceOfProduct: "$25"},
        {imgs:bowTie, goods: "Classic Bow tie", priceOfProduct: "$25"},
        {imgs:utranet, goods: "Utra net black shirt", priceOfProduct: "$25"},
        {imgs:vintage, goods: "Warning shirt", priceOfProduct: "$25"},
    ]
  return (
    <div>
        <h1 className="font-metropolisFont font-extrabold text-2xl">Men&apos;s Store</h1>
        <div>
            {mensProducts.map((menProduct,index) => (
                <MenCategoriesPattern key={index} 
                    productImg={menProduct.imgs}
                    price={menProduct.priceOfProduct}
                />
            ))}
        </div>
    </div>
  )
}
