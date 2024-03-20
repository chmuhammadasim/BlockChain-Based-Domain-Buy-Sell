import { ethers } from 'ethers';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {

  return (
    <nav>
        <div className='nav__brand'>
          <img alt='logo' src={logo}/>
          <h1>ETH Daddy</h1>
          <ul className='nav__links'>
            <li><a href="/" className=''>Domain Names</a></li>
            <li><a href="/" className=''>Websites and Hosting</a></li>
            <li><a href="/" className=''>About  </a></li>
          </ul>
        </div>
        <button></button>
    </nav>
  );
}

export default Navigation;