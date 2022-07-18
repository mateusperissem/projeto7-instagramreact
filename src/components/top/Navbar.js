import Logo from "./Logo";
import LogoMob from "./LogoMob";
import InstaMob from "./InstaMob";
import Pesquisa from "./Pesquisa";
import Icones from "./Icones";
import IconesMob from "./IconesMob";

function Navbar() {
  return (
    <div class="navbar">
      <div class="container">
        <Logo />
        <LogoMob />
        <InstaMob />
        <Pesquisa />
        <Icones />
        <IconesMob />
      </div>
    </div>
  );
}
export default Navbar;
