import Image from "next/image";
export default function SellingCard({cloth,nameOfCloth}) {
  return (
    <div className="bg-categoriesGray pb-4 mb-4 rounded-md">
        <Image src={cloth} alt="type of cloth" />
        <p className="text-center">{nameOfCloth}</p>
    </div>
  )
}
