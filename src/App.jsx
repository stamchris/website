import React from 'react'
import styles from './style';
import {useState} from 'react'

import { Navbar,Hero,Illustration,Faq } from './components';

const App = () => {

	const [toggle, setToggle] = useState(false);

	return (
		<div className="w-full bg-slate-100">

			<div className={`${styles.flexCenter} bg-slate-50 rounded`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar toggle={toggle} setToggle={setToggle}/> 
				</div>
			</div>

			<div className={`${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero toggle={toggle} setToggle={setToggle}/>
				</div>
			 </div>

			<div className={`${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Illustration/>
				</div>
			</div>

			<div className={`${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Faq/>
				</div>
			</div>





		</div>
		
)}

export default App;