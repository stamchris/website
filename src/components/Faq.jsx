import styles from '../style';
import {faq} from '../constants'
import { arrow } from '../assets';
import { useState } from 'react';

const Faq = () => {

    const [isRotated,setRotation] = useState(false);

    return (
        <section 
        className="flex flex-col"
        >
            <h1 className='text-4xl m-4'
            >FAQ
            </h1>
            {
                faq.map((item,index) => (
                    <div className='flex-1 flex flew-row justify-center items-center h-24 w-fit p-5 m-2 bg-emerald-100' key={index}>
                        <h1>{item.question}</h1>
                        <img src={arrow} alt="arrow up" 
                            className = {`h-3 w-3 sm:h-4 sm:w-4 ml-4 ${isRotated ? 'rotate-180' : 'rotate-0' }`}
                            onClick = {() => setRotation((prev) => !prev) }

                        />
                    </div>
                ))}

        </section>
    )    
}

export default Faq;