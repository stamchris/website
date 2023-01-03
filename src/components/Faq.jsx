import styles from '../style';
import {faq} from '../constants'
import { arrow } from '../assets';
import { useState, useRef } from 'react';

const Faq = () => {

    const [faqList,setFaq] = useState(faq);

    function handleClick(index) {
        const newFaq = faqList.map((item) => {
            if (item.id === index) {
                return {...item,active: !item.active}
            }
            return item
        })

        setFaq(newFaq)
    }

    return (
        <section 
        className="flex flex-col"
        >
            <h1 className='text-5xl text-gray-800 m-4 p-2 font-mono text-center'
            >FAQ
            </h1>
            {
                faqList.map((item) => (
                    <div key={item.id} className='flex flex-col'>
                        <div className='flex-1 flex flew-row justify-center items-center h-24 w-fit p-5 m-2 bg-gradient-to-b from-gray-200 via-gray-50 to-gray-200 cursor-pointer rounded-[10px] drop-shadow-md' key={item.id} 
                        onClick = {() => {handleClick(item.id)}} >

                            <h1 className='text-lg '>
                                {item.question}
                            </h1>
                            <img src={arrow} alt="arrow up" 
                                className = {`h-3 w-3 sm:h-4 sm:w-4 ml-4 ${item.active ? 'rotate-180' : 'rotate-0' }`} 
                            />
                            
                        </div>

                        <div className={`${item.active ? 'block' : 'hidden'} justify-center items-center flex-1 h-24 w-fit bg-gray-50 p-4 m-1 rounded-[10px] border-l-8 border-emerald-400 text-gray-800`}>
                            {item.answer}
                        </div>
                    </div>
                ))}

        </section>
    )    
}

export default Faq;