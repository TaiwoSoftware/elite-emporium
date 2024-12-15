import MenuPattern from "./MenuPattern";
import accountImg from "./navbarImage/user.svg";
import help from "./navbarImage/help.svg";
import cart from "./navbarImage/cart.svg";
import dropDownImg from "./navbarImage/dropdownIcon.svg";
export default function Menu() {
  const imgs = [
    { img: accountImg, para: "Account", cartImg: dropDownImg },
    { img: help, para: "Help", cartImg: dropDownImg },
    { img: cart, para: "Cart", cartImg: dropDownImg },
  ];
  return (
    <div className="flex gap-2">
      {imgs.map((element, index) => (
        <>
          <MenuPattern corresImg={element.img} corresPara={element.para} dropDown={element.cartImg} key={index} />
        </>
      ))}
    </div>
  );
}
