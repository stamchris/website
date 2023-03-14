import styles from '../style';
import { productItems} from '../constants'

const Illustration = () =>(

        <section id='product' className={`flex flex-col w-full  justify-center items-center `}>

            {productItems.map((item,index) =>(
                <div className='flex-1 flex flex-row even:flex-row-reverse gap-10 p-4 w-full h-[200px] md:h-[300px] bg-white m-2 justify-between items-center drop-shadow-sm rounded-lg z-30' key={index}>

                    <img src={`${item.img}`} alt="illustration"
                    className='h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] z-30'
                    />
                        
                    <div className=''>    
                        <h1 className=' text-gray-600 text-2xl sm:text-3xl text-center text-bold p-4 my-4 rounded-lg md:text-4xl md:min-h-[140px] z-30'>
                                {item.title}
                        </h1>
                        <p
                            className='text-xs sm:text-sm md:text-md max-w-[700px] py-3 bg-white rounded-sm px-1 my-4 border-l-4 border-emerald-400 text-gray-700  z-30'
                        >
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </section>
)


export default Illustration;