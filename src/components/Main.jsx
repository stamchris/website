import React from 'react';
import styles from '../style';
import {foot1,foot2,google,apple} from '../assets';

const Main = () => (
		<section id='home' className={`${styles.marginY}`}>
			<div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} flex-wrap flex-col sm:flex-row bg-green-300 mx-6 rounded-xl`}>

				<div className='flex-1 flex-col h-full'>
					<h1 className=' font-noto font-semibold leading-wide tracking-wide text-3xl text-zinc-900 sm:text-3xl'>Μια καλή ατάκα για την εφαρμογή
					</h1>
					<div className='pt-8'>
						<h2 className='font-noto font-semibold leading-normal tracking-wide text-md text-zinc-600'> Με ένα κλικ βρισκεις απευθείας γήπεδο εσύ και η παρέα σου 
						</h2>
					</div>
					<div className='pt-10 flex justify-center sm:justify-start'>
						<h3 className='font-noto font-semibold leading-normal tracking-normal text-md text-zinc-900 '> Κατέβασε την  
							<span className='text-green-300 font-bold text-lg'> εφαρμογή
							</span>
						τώρα 
						</h3>
					</div>
					<div className='flex flex-row pt-8 px-4 gap-20 justify-center items-center h-30 sm:justify-start'>
						<img src={google} alt="android store" className='h-[50px] w-[50px]' />
							<img src={apple} alt="appstore"/>
					</div>
				</div>

				<div className='py-12 sm:py-2 md:py-0'>
								<img src={foot2} alt="football image" className='w-[250px] h-[400px] rounded-md drop-shadow-md sm:w-[350px] sm:h-[500px]'/>   
				</div>
			</div>
		</section>
	)

export default Main