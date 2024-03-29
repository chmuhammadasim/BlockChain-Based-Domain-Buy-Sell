import { ethers } from 'ethers';
import logo from '../assets/logo.svg';


const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
  }
  return (

      <nav>
        <div className='nav__brand'>
          <img alt='logo' src={logo} />
          <h1>ETH Daddy</h1>
          <ul className='nav__links'>
            <li><a href="/" className=''>Domain Names</a></li>
            <li><a href="/" className=''>Websites and Hosting</a></li>
            <li><a href="/AboutMe" className=''>About  </a></li>
          </ul>
        </div>
        {account ? (
          <button type="button" className='nav__connect'> {account.slice(0, 6) + '...' + account.slice(38, 42)} </button>
        ) : (
          <button type="button" className='nav__connect' onClick={connectHandler}> Connect </button>
        )}
      </nav>

  );
}

export default Navigation;