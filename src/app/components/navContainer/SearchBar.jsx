import Image from "next/image";
import searchIcon from "./navbarImage/searchIcon.svg";
export default function SearchBar() {
  return (
    <>
      <div className="flex">
        <input
          type="search"
          name="searchBox"
          id="SearchBox"
          tabIndex={true}
          className="border border-searchBorder bg-transparent rounded-l-full w-[468px] p-2 outline-none text-center"
          placeholder="Search for dresses, shirts, trouser etc."
        />
        <div className="bg-buttonWine  w-10 p-2 rounded-r-full">
          <Image src={searchIcon} alt="This is the search icon" />
        </div>
      </div>
    </>
  );
}
