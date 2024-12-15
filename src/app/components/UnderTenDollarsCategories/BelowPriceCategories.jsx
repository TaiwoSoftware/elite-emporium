import foldedShirt from "./Images/foldedShirts.svg";
import gown from "./Images/gown.svg";
import belt from "./Images/fancyBelt.svg";
import Image from "next/image";
export default function BelowPriceCategories() {
  const underTenCategories = [
    { imgs: foldedShirt, price: "Men Under $10" },
    { imgs: gown, price: "Women Under $10" },
    { imgs: belt, price: "Men Under $10" },
  ];
  return (
    <div className="bg-categoriesGray mt-5 pr-[60px] py-10">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h1 className="font-metropolisFont font-extrabold text-2xl text-center">
            Under $10 category
          </h1>
          <p className="font-inter font-base text-normal text-center text-belowGray">
            Unleash your inner fashion without <br /> breaking the Bank. Style Maven, a <br />
            place where style knows no bound.
          </p>
        </div>
        <div>
          <div>
            <div className="flex items-center gap-10">
              {underTenCategories.map((productUnderTenDollars, index) => (
                <div key={index}>
                  <Image
                    src={productUnderTenDollars.imgs}
                    alt="products that are Under 10 dollars"
                  />
                  <span>{productUnderTenDollars.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
