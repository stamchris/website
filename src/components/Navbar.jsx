import {useState} from 'react'
import {new_logo,close,menu} from '../assets'
import { navLinks } from '../constants';
import styles from '../style'
import {Link} from 'react-router-dom'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const Navbar = ({toggle,setToggle,body}) => {

	const toggleHandler = (setToggle) => {
		toggle ? enableBodyScroll(body.current) : disableBodyScroll(body.current);setToggle((prev) => !prev);
	}


  return (
	
		<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
			<a href="https://meetnkick.com/" className="flex items-center">
				<img src={new_logo} className="h-8 sm:h-16 mr-3" alt="MeetnKick Logo"/>
				<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MeetNKick</span>
			</a>
				<div className="flex md:order-2">
					<button type="button" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Κατέβασε την εφαρμογή</button>
					<button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<img source={menu} className="w-5 h-5" aria-hidden="true"/>
					</button>
				</div>
				<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{navLinks.map((nav,index) => (
							<li
								key={nav.id}
							>
									<a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:dark:hover:text-emerald-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									href={`#${nav.id}`}>
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