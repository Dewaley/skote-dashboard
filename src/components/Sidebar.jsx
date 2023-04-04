import { NavLink } from "react-router-dom";
import smallLogo from "../assets/logo.svg";
import bigLogo from "../assets/logoBig.png";
import { FaBitcoin, FaOpencart, FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineSell } from "react-icons/md";
import { BsWallet2, BsCalendar3, BsFileEarmarkText } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";
import { BiUserCheck } from "react-icons/bi";
import { UseHamburger } from "../context/Hamburger";

const Sidebar = () => {
  const [hamburger, setHamburger] = UseHamburger(false);

  return (
    <div className={`element sidebar ${hamburger && "closed"}`}>
      <div className='logo'>
        {hamburger ? (
          <img src={smallLogo} alt='Skote logo' />
        ) : (
          <img src={bigLogo} alt='Skote logo' />
        )}
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
      <nav className='closedDeets'>
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
              <span className='content'>Wallet</span>
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
              <span className='content'>Buy/Sell</span>
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
              <span className='content'>Exchange</span>
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
              <span className='content'>Lending</span>
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
              <span className='content'>Orders</span>
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
              <span className='content'>KYC Application</span>
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
              <span className='content'>Calendar</span>
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
              <span className='content'>File Manager</span>
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
              <span className='content'>ICO Landing</span>
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
