import { useState } from "react";
import {foot1,foot2,foot3} from '../assets';

const slides = [
	foot1,
	foot2,
	foot3
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
	  <div className="flex justify-center items-center relative"
			onMouseEnter={()=>setIsHovered(true)}	
			onMouseLeave={()=>setIsHovered(false)}
	  >
		<img
			src = {`${slides[currentIndex]}`}
			className='w-[300px] h-[450px] rounded-md drop-shadow-md sm:w-[300px] sm:h-[450px] md:w-[400px] md:h-[550px]'
		/>

		<div id = 'arrows' className={`flex flex-row absolute top-50 w-[300px] md:w-[400px] cursor-pointer ${isHovered ? 'visible' : 'invisible'}`}>
			<div onClick={goToPrevious} className='text-white/[.9] text-3xl flex-1 place-self-start'>
			❰
			</div>
			<div onClick={goToNext} className='text-white/[.9] text-3xl place-self-end'>
			❱
			</div>
      	</div>

		<div id = 'bullets' className={`absolute bottom-0 flex flex-row gap-2 cursor-pointer`}>
		  {slides.map((slide, slideIndex) => (
			<div
			  className=" text-white/[.7] text-sm"
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