
import { Link } from 'react-router-dom'
import { styles } from '../style';

const Navbar = () => {
  return (
    <nav className="flex bg-transparent">
      <ul className="flex flex-col xl:flex-row gap-10 justify-center w-full">
      <li className={`${styles.tertiaryBtn}`}>
          <Link className='w-full h-full flex justify-center items-center' to="/">Home</Link>
        </li>
        <li className={`${styles.primaryBtn}`}>
          <Link className='w-full h-full flex justify-center items-center' to="/qrGenerator">Qr Code Generator</Link>
        </li>
        <li className={`${styles.secondaryBtn} `}>
          <Link className='w-full h-full flex justify-center items-center' to="/qrScanner">Qr Code Scanner</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;