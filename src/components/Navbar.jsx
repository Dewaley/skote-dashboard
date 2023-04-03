import { IoIosMenu } from "react-icons/io";
import {
  BiSearchAlt,
  BiCustomize,
  BiBell,
  BiChevronDown,
} from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import pfp from "../assets/pfp.jpg";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='left'>
        <IoIosMenu className='hamburger' />
        <form action=''>
          <BiSearchAlt className='search' />
          <input type='text' name='' id='' />
        </form>
      </div>
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
