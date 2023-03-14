import React from 'react'
import styles from '../style';
import {useState,useRef} from 'react'
import { Navbar,Hero,Illustration,Faq, Footer,} from '../components';

const Home = () => {

	// toggle menu 
	const [toggle, setToggle] = useState(false);
	// blur mode
	const bodyRef = useRef(false);


	return (
		
			<div ref={bodyRef} className={`w-full bg-slate-50`}>

				<div className={`${styles.flexCenter} bg-slate-50 rounded `}>
					<div className={`${styles.boxWidth} `}>
						<Navbar toggle={toggle} setToggle={setToggle} body={bodyRef}/> 
					</div>
				</div>

					
				<div className={`${styles.flexStart} ${toggle ? 'blur-sm' : 'blur-none'}`}>
					<div className={`${styles.boxWidth}`} >
						<Hero />						
					</div>
				</div>
				
					

				<div className={`${styles.flexStart} ${toggle ? 'blur-sm' : 'blur-none'}`}>
					<div className={`${styles.boxWidth}`}>
						<Illustration />
					</div>
				</div>

				<div className={`${styles.flexStart} ${toggle ? 'blur-sm' : 'blur-none'}`}>
					<div className={`${styles.boxWidth}`}>
						<Faq/>
					</div>
				</div>

				<div className={`${styles.flexStart} ${toggle ? 'blur-sm' : 'blur-none'}`}>
					<div className={`${styles.boxWidth}`}>
						<Footer/>
					</div>
				</div>
			</div>
		
		
)}

export default Home;