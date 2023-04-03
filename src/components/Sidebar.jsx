import { NavLink } from "react-router-dom";
import smallLogo from "../assets/logo.svg";
import bigLogo from "../assets/logoBig.png";
import { FaBitcoin, FaOpencart, FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";
import { BsWallet2, BsCalendar3, BsFileEarmarkText } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";
import { BiUserCheck } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className='element sidebar'>
      <div className='logo'>
        {/* <img src={smallLogo} alt='Skote logo' /> */}
        <img src={bigLogo} alt='Skote logo' />
      </div>
      <nav className='deets'>
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
              className={({ isActive }) => (isActive ? "activeLink link" : "link")}
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

export default Sidebar;
