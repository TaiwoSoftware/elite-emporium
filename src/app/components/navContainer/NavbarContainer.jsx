import Menu from "./Menu";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
export default function NavbarContainer() {
  return (
    <div className="bg-navbarGray p-4 flex items-center justify-between">
        <Navbar />
        <SearchBar />
        <Menu />
    </div>
  )
}
