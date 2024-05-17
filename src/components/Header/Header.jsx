import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import { RiMenu3Line } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";
import { useState } from 'react';


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='flex items-center justify-between mx-3 md:mx-0 '>
            <Link to='/' className='md:h-16 h-11 w-44 md:w-64 '>
                <img src={logo} alt="" className='h-full'/>
            </Link>
            <div>
                <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className='md:hidden'>
                    <span> {isMenuOpen === true ? <CgCloseO className='h-10 w-10'/> : <RiMenu3Line className='h-10 w-10'/>} </span>
                </button>
                <nav className={`flex flex-col md:flex-row gap-4 md:gap-12 absolute  md:static text-center ${isMenuOpen ? 'right-4' : 'hidden md:flex'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'}>Home</NavLink>
                    <NavLink to='/donation' className={({ isActive }) => isActive ? 'active' : 'default'}>Donation</NavLink>
                    <NavLink to='/statistics' className={({ isActive }) => isActive ? 'active' : 'default'}>Statistics</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;