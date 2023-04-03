import { GiHamburgerMenu } from "react-icons/gi";
import {
  BiSearchAlt,
  BiCustomize,
  BiBell,
  BiChevronDown,
} from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import pfp from "../assets/pfp.jpg";
import { UseHamburger } from "../context/Hamburger";

const Navbar = () => {
  const [hamburger, setHamburger] = UseHamburger(false);
  return (
    <div className='Navbar'>
      <div className='left'>
        <GiHamburgerMenu
          className='hamburger'
          onClick={() => {
            setHamburger(!hamburger);
          }}
        />
        <form action=''>
          <BiSearchAlt className='search' />
          <input type='text' name='' id='' placeholder='Search...' />
        </form>
      </div>
      {hamburger ? "true" : "false"}
      <div className='right'>
        <BiCustomize className='customize' />
        <div className='notification'>
          <span className='number'>3</span>
          <span>
            <BiBell className='bell' />
          </span>
        </div>
        <div className='user'>
          <img src={pfp} alt='User pfp' />
          <span className='name'>Maxwell</span>
          <BiChevronDown />
        </div>
        <TbSettings className='settings' />
      </div>
    </div>
  );
};

export default Navbar;
