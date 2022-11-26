import React from 'react';
import styles from '../style';
import {foot1,foot2,google,apple} from '../assets';

const Main = () => (
		<section id='home' className={`${styles.marginY}`}>
			<div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} w-full flex-wrap flex-col sm:flex-row bg-main sm:mx-6 rounded:md sm:rounded-xl`}>

				<div className='flex-1 flex-col'>
					<div className='md:h-[130px]'>
						<h1 className=' font-noto font-bold leading-tight md:leading-11 tracking-wide text-3xl text-white md:text-5xl text-center sm:text-left md:h-full
						'>Η εφαρμογή για να βρίσκεις ματς 5x5
						</h1>
					</div>	
					<div className='p-2 md:p-4 mt-6 bg-white rounded-xl'>
						<h2 className='font-noto text-bold sm:text-lg leading-normal tracking-wide text-green-500 text-center '> Με ένα κλικ βρισκεις απευθείας γήπεδο εσύ και η παρέα σου 
						</h2>
					</div>
					<div className='pt-10 flex justify-center sm:justify-start'>
						<h3 className='font-noto font-semibold leading-normal tracking-normal text-md text-slate-50 '>
							<span className='text-green-500 bg-white rounded-xl p-1.5 m-1 bg-font-bold text-md sm:mr-2'> Κατέβασε 
							</span>  
						την εφαρμογή τώρα 
						</h3>
					</div>
					<div className='flex flex-row pt-8 px-4 gap-20 justify-center items-center h-30 sm:justify-start'>
						<img src={google} alt="android store" className='h-[50px] w-[50px]' />
						<img src={apple} alt="appstore"/>
					</div>
				</div>

				<div className='py-12 sm:py-2 md:py-0 sm:ml-10 md:ml-20'>
					<img src={foot2} alt="football image" className='w-[300px] h-[450px] rounded-md drop-shadow-md sm:w-[300px] sm:h-[450px] md:w-[400px] md:h-[550px]'
					/>   
				</div>
			</div>
		</section>
	)

export default Main