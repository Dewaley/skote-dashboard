import { IoIosMenu } from "react-icons/io";
import {
  BiSearchAlt,
  BiCustomize,
  BiBell,
  BiChevronDown,
} from "react-icons/bi";
import {TbSettings} from "react-icons/tb"
import pfp from "../assets/pfp.jpg";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='left'>
        <span className='hamburger'>
          <IoIosMenu />
        </span>
        <form action=''>
          <span className='search'>
            <BiSearchAlt />
          </span>
          <input type='text' name='' id='' />
        </form>
      </div>
      <div className='right'>
        <div className='customize'>
          <span>
            <BiCustomize />
          </span>
        </div>
        <div className='notification'>
          <span className='number'>3</span>
          <span className='bell'>
            <BiBell />
          </span>
        </div>
        <div className='user'>
          <img src={pfp} alt='User pfp' />
          <span className='name'>admin</span>
          <span className='arrow'>
            <BiChevronDown />
          </span>
        </div>
        <div className="settings"><TbSettings/></div>
      </div>
    </div>
  );
};

export default Navbar;
