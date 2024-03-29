import {useState} from 'react'
import {logo,close,menu,black_logo} from '../assets'
import { navLinks } from '../constants';
import styles from '../style'
import {Link} from 'react-router-dom'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const Navbar = ({toggle,setToggle,body}) => {

	const toggleHandler = (setToggle) => {
		toggle ? enableBodyScroll(body.current) : disableBodyScroll(body.current);setToggle((prev) => !prev);
	}


  return (
	<nav className='h-[70px] sm:h-[100px] w-full flex justify-between items-center navbar bg-gradient-to-b from-gray-50 to-white border-b-2'>
		<Link to="/">
			<img src={logo} alt="Company Logo" className='w-[60px] h-[50px] sm:w-[100px] sm:h-[90px] rounded m-2 cursor-pointer'/>
		</Link>
		<h4 className='text-[20px] sm:text-[25px] text-zinc-700 tracking-wider font-bold'>Meet N Kick</h4>

		<ul className={`list-none hidden md:flex justify-end items-center flex-1 gap-6 `}>
			{navLinks.map((nav, index) => (
				<li
					key={nav.id}
					className={`font-Inter font-semibold cursor-pointer text-[16px]  ${styles.hoverColor} text-gray-500
					`}
				>
					<a className={`p-5 rounded-lg ${styles.hoverColor}`} href={`#${nav.id}`}>
						{nav.title}
					</a>
				</li>              
			))}
		</ul>

		<div className='md:hidden flex flex-1 justify-end items-center'>
			<img	
				src={toggle ? close : menu} 
				alt="menu"
				className='w-[28px] h-[28px] object-contain mr-4' 
				onClick={() => toggleHandler(setToggle)}
			/>

			<div
				className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-200 opacity-90 z-50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] h-[300px] w-[300px] rounded-xl sidebar`}
				>
				<ul className='list-none flex flex-col justify-center items-center flex-1'>
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-noto cursor-pointer text-[16px] font-bold ${index === navLinks.length - 1 ? `mb-0 `: `mb-6`} text-gray-700 hover:underline focus:underline hover:underline-offset-4 decoration-emerald-400 decoration-2
							`}
						>
							<a href={`#${nav.id}`} onClick={() =>toggleHandler(setToggle)}>
								{nav.title}
							</a>
						</li>                
					))}
				</ul>	

			</div>
		</div>    
	</nav>
	
  )
}

export default Navbar