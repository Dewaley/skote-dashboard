import smallLogo from "../assets/logo.svg";
import bigLogo from "../assets/logoBig.png";

const Sidebar = () => {
  return (
    <div className='element sidebar'>
      <div className='logo'>
        {/* <img src={smallLogo} alt='Skote logo' /> */}
        <img src={bigLogo} alt='Skote logo' />
      </div>
      <div className="deets">
        <h5>CRYPTO</h5>
        <ul>
          <li>Wallet</li>
          <li>Buy/Sell</li>
          <li>Exchange</li>
          <li>Lending</li>
          <li>Orders</li>
          <li>KYC Application</li>
          <li>ICO Landing</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
