import Header from "./components/Header/Header";
import MenStore from "./components/MenCategories/MenStore";
import NavbarContainer from "./components/navContainer/NavbarContainer";
import SellingCategories from "./components/sellingCat/SellingCategories";
import BelowPriceCategories from "./components/UnderTenDollarsCategories/BelowPriceCategories";
export default function Home() {
  return (
    <>
      <NavbarContainer />
      <Header />
      <SellingCategories />
      <BelowPriceCategories />
      <MenStore />
    </>
  );
}
