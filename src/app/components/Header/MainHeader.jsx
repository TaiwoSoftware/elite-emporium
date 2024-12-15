import Image from "next/image";
import illustration from "./HeaderImg/illustration.svg";
export default function MainHeader() {
  return (
    <>
      <div>
        <div className="bg-gradient-to-b from-lighterBrown to-lighterDark mt-4 flex items-center gap-40">
          <div className="ml-28">
            <h1 className="font-bold text-5xl text-white font-metropolisFont">
              Ditch the Labels, Dress <br /> your Vibe
            </h1>
            <p className="text-white font-inter mt-4 text-normal mb-4">
              Explore our collection of unique cloths that suits your
              personality
            </p>
            <button className="bg-white font-semibold px-5 rounded-full py-2 text-lg">
              Shop for men
            </button>
            <button className="bg-black text-white font-semibold ml-4 px-5 rounded-full py-2 text-lg">
              Shop for women
            </button>
          </div>
          <Image
            src={illustration}
            alt="a boy and a girl rocking the carton brown designs "
          />
        </div>
      </div>
    </>
  );
}
