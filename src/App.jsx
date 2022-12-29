import React from 'react'
import styles from './style';

import { Navbar,Hero,Illustration,Faq } from './components';

const App = () => (
		<div className="w-full bg-slate-100">

			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth} `}>
					<Navbar/> 
				</div>
			</div>

			<div className={`${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero/>
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
		
)

export default App;