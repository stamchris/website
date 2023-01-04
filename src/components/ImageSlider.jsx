import { useState } from "react";
import {app1,app2,app3} from '../assets';

const slides = [
	app1,
	app2,
	app3,
]

const ImageSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const [isHovered,setIsHovered] = useState(false);

	// functions for the slider
	const goToPrevious = () => {
	  const isFirstSlide = currentIndex === 0;
	  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
	  setCurrentIndex(newIndex);
	};
	const goToNext = () => {
	  const isLastSlide = currentIndex === slides.length - 1;
	  const newIndex = isLastSlide ? 0 : currentIndex + 1;
	  setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex) => {
	  setCurrentIndex(slideIndex);
	};

	return (
	  <div className="flex justify-center items-center relative z-0 "
			onMouseEnter={()=>setIsHovered(true)}	
			onMouseLeave={()=>setIsHovered(false)}
	  >
				<img
					src = {`${slides[currentIndex]}`}
					className='w-[250px] h-[450px] rounded-lg drop-shadow-lg md:w-[300px] md:h-[550px] z-20 relative'
				/>

				<div 
					className=" absolute bottom-[-20] w-[250px] h-[400px] md:w-[320px] md:h-[580px] bg-gradient-to-b from-emerald-200 via-emerald-100 to-emerald-200 opacity-30 z-10 rounded-lg ">
				</div>


				<div id = 'arrows' className={`flex flex-row absolute top-50 w-[250px] md:w-[300px] cursor-pointer ${isHovered ? 'visible' : 'invisible'} z-20`}>
					<div onClick={goToPrevious} className='text-emerald-500 text-3xl flex-1 place-self-start'>
					❰
					</div>
					<div onClick={goToNext} className='text-emerald-500 text-3xl place-self-end'>
					❱
					</div>
				</div>

				<div id = 'bullets' className={`absolute bottom-0 flex flex-row gap-2 cursor-pointer z-20`}>
				{slides.map((slide, slideIndex) => (
					<div
					className=" text-emerald-500 text-sm"
					key={slideIndex}
					onClick={() => goToSlide(slideIndex)}
					>
					●
					</div>
				))}
				</div>
	  </div>
	);
  };

  export default ImageSlider;