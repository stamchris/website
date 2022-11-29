import React from 'react';
import styles from '../style';
import {google,apple} from '../assets';
import ImageSlider from './ImageSlider';

const Hero = () => (
		<section id='home' className={`${styles.marginY}`}>
			<div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} w-full flex-col sm:flex-row bg-gradient-to-b from-emerald-600 via-emerald-400 to-emerald-700 rounded:lg  sm:rounded-md`}>

				<div className={`flex-1 flex-col`}>
					<div className='md:h-[130px]'>
						<h1 className=' font-noto font-semibold leading-tight md:leading-11 tracking-wide text-3xl text-white md:text-5xl text-center sm:text-left md:h-full
						'>Η εφαρμογή για να βρίσκεις ματς 5x5
						</h1>
					</div>	
					<div className='md:p-4 mt-6'>
						<h2 className='font-sans sm:text-lg font-light leading-normal tracking-wide text-white text-center '> Με ένα κλικ βρισκεις 
							<span className='underline underline-offset-8 decoration-2 mx-2'>
								απευθείας
							</span> 
						γήπεδο εσύ και η παρέα σου 
						</h2>
					</div>
					<div className='pt-10 flex justify-center sm:justify-start'>
						<h3 className='font-sans leading-normal tracking-normal text-md text-slate-50 '>
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
						<ImageSlider/>
				</div>
			</div>
		</section>
	)

export default Hero