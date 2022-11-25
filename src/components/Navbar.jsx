import {useState} from 'react'

import {logo,close,menu} from '../assets'
import { navLinks } from '../constants';
import styles from '../style'

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

  return (
	<nav className='w-full flex pt-6 justify-between items-center navbar '>
		<img src={logo} alt="Company Logo" className='w-[60px] h-[50px] '/>
		<h4 className='text-[20px] text-zinc-700 font-semibold'>Meet N Kick</h4>

		<ul className={`list-none hidden sm:flex justify-end items-center flex-1 gap-6 `}>
			{navLinks.map((nav, index) => (
				<li
					key={nav.id}
					className={`font-Inter font-semibold cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mr-0 `: `mr-0`} ${styles.hoverColor} text-gray-400
					`}
				>
					<a className={`p-5 rounded-lg ${styles.hoverColor}`} href={`#${nav.id}`}>
						{nav.title}
					</a>
				</li>                
			))}
		</ul>

		<div className='sm:hidden flex flex-1 justify-end items-center'>
			<img	
				src={toggle ? close : menu} 
				alt="menu"
				className='w-[28px] h-[28px] object-contain' 
				onClick={() => setToggle((prev) => !prev)}
			/>

			<div
				className={`${toggle ? 'flex' : 'hidden'} p-6 bg-main absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
				<ul className='list-none flex flex-col justify-end items-center flex-1'>
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-noto cursor-pointer text-[16px] ${index === navLinks.length - 1 ? `mb-0 `: `mb-4`} text-white 
							`}
						>
							<a href={`#${nav.id}`}>
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