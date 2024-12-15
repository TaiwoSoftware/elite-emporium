import Image from "next/image";
export default function MenCategoriesPattern({productImg,nameOfMenProduct,price}) {
  return (
    <div>
        <Image src={productImg} alt="product Image" />
        <p>{nameOfMenProduct}</p>
        <span>
            
        </span>
        <p>{price}</p>
    </div>
  )
}
