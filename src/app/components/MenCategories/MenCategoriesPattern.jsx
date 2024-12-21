import Image from "next/image";
export default function MenCategoriesPattern({
  productImg,
  nameOfMenProduct,
  price,
}) {
  return (
    <div>
      <Image src={productImg} alt="product Image" />
      <p className="text-belowGray font-inter font-bold">{nameOfMenProduct}</p>
      <div className="flex gap-4 rounded-lg">
        <div className="bg-navbarGray p-4">XS</div>
        <div className="bg-navbarGray p-4">S</div>
        <div className="bg-navbarGray p-4">M</div>
        <div className="bg-navbarGray p-4">L</div>
        <div className="bg-navbarGray p-4">XL</div>
        <div className="bg-navbarGray p-4">XXL</div>
      </div>
      <p className="font-bold text-searchBorder">{price}</p>
    </div>
  );
}
