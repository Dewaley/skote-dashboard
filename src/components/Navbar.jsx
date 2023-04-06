import { GiHamburgerMenu } from "react-icons/gi";
import {
  BiSearchAlt,
  BiCustomize,
  BiBell,
  BiChevronDown,
  BiUserCheck,
} from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { BsWallet2, BsCalendar3, BsFileEarmarkText } from "react-icons/bs";
import { TbSettings, TbArrowsExchange } from "react-icons/tb";
import { FaBitcoin, FaOpencart, FaHandHoldingUsd } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
        <BiSearchAlt className='searchBtn' />
        {/* <form action=''>
          <BiSearchAlt className='search' />
          <input type='text' name='' id='' placeholder='Search...' />
        </form> */}
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
      <nav className={`deets ${hamburger && "active"}`}>
        <h3>APPS</h3>
        <ul>
          <li>
            <NavLink
              to=''
              end
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              <span className='icon'>
                <BsWallet2 />
              </span>
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink
              to='buy-sell'
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              <span className='icon'>
                <MdOutlineSell />
              </span>
              Buy/Sell
            </NavLink>
          </li>
          <li>
            <NavLink
              to='exchange'
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              <span className='icon'>
                <TbArrowsExchange />
              </span>
              Exchange
            </NavLink>
          </li>
          <li>
            <NavLink
              to='lending'
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              <span className='icon'>
                <FaHandHoldingUsd />
              </span>
              Lending
            </NavLink>
          </li>
          <li>
            <NavLink
              to='orders'
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              <span className='icon'>
                <FaOpencart />
              </span>
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='kyc-application'
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              <span className='icon'>
                <BiUserCheck />
              </span>
              KYC Application
            </NavLink>
          </li>
          <li>
            <NavLink
              to='ico-landing'
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              <span className='icon'>
                <BsCalendar3 />
              </span>
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to='ico-landing'
              className={({ isActive }) => (isActive ? "activeLink" : "link")}
            >
              <span className='icon'>
                <BsFileEarmarkText />
              </span>
              File Manager
            </NavLink>
          </li>
          <li>
            <NavLink
              to='ico-landing'
              className={({ isActive }) =>
                isActive ? "activeLink link" : "link"
              }
            >
              <span className='icon'>
                <FaBitcoin />
              </span>
              ICO Landing
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
