import Image from "next/image";
export default function MenuPattern({corresImg,corresPara,dropDown}) {
  return (
    <div className="flex items-center cursor-pointer gap-1">
        <Image src={corresImg} alt={corresImg} />
        <p className="font-normal font-juraFont text-center text-2xl">{corresPara}</p>
        <Image src={dropDown} alt="dropDownImg" />
    </div>
  )
}
