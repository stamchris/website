import React from 'react';
import styles from '../style';
import {google1,apple1,hero1_img} from '../assets';
import ImageSlider from './ImageSlider';

const Hero = () => {

	return (
		<section id='home' className={`${styles.marginYHero}`}>
			<div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter} w-full flex-col sm:flex-row bg-white rounded:lg  sm:rounded-md relative z-30`}>

				<div
                    className='absolute h-full w-full top-0 left-30 opacity-40 bg-white z-20'>
                </div>
				<div className={`flex-1 flex-col z-30`}>
					<div className='md:h-[130px]'>
						<h1 className=' font-noto font-semibold leading-tight md:leading-11 tracking-wide text-3xl text-gray-800 md:text-5xl text-center sm:text-left md:h-full
						'>Η εφαρμογή για να βρίσκεις ματς 5x5
						</h1>
					</div>	
					<div className='mt-6 px-8 py-4 md:py-4 sm:px-0'>
						<h2 className='font-sans text-center sm:text-left sm:text-2xl font-light leading-normal tracking-wide text-gray-800 '> Με ένα κλικ βρισκεις 
							<span className='underline underline-offset-8 decoration-2 decoration-emerald-400 mx-2'>
								απευθείας
							</span> 
						γήπεδο εσύ και η παρέα σου 
						</h2>
					</div>
					<div className='pt-10 flex justify-center sm:justify-start'>
						<h3 className='font-sans sm:text-xl leading-normal tracking-normal text-md text-gray-800 '>
							<span className='text-emerald-400 rounded pr-1.5 mr-1 font-medium text-md sm:mr-2'> Κατέβασε 
							</span>  
						την εφαρμογή τώρα 
						</h3>
					</div>
					<div className='flex flex-row pt-8 px-4 gap-20 justify-center items-center h-30 sm:justify-start'>
						<a href='https://play.google.com/store/apps/details?id=meet.n.kick'>
							<img src={google1} alt="android store" className='h-[50px] w-[50px]'
							/>
						</a>
						<a href='https://apps.apple.com/gr/app/meet-n-kick/id6444569617'>
							<img src={apple1} alt="appstore" className='h-[50px] w-[50px]'/>
						</a>
					</div>
				</div>

					<div className='absolute z-20 invisible sm:visible right-[20px] bottom-[-30px] md:bottom-0 md:right-0'>
						<img src={hero1_img} alt="football image" className='h-[300px] w-[300px] md:h-[400px] md:w-[390px] '/>
					</div>
				
			</div>
		</section>
	)
}

export default Hero