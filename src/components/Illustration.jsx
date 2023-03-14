import styles from '../style';
import { productItems} from '../constants'

const Illustration = () =>(

        <section id='product' className={`flex flex-col w-full md:h-[600px] justify-center items-center mt-10`}>

            {productItems.map((item,index) =>(
                <div className='flex-1 flex flex-row even:flex-row-reverse gap-10 p-4 w-full h-[200px] md:h-[300px] bg-white m-2 justify-start items-center drop-shadow-sm rounded-lg z-30' key={index}>

                    <img src={`${item.img}`} alt="illustration"
                    className='h-[200px] w-[200px] z-30 '
                    />
                        
                    <div>    
                        <h1 className='text-emerald-500 text-2xl text-center text-bold p-4 my-4 rounded-lg md:text-3xl md:min-h-[140px] z-30'>
                                {item.title}
                        </h1>
                        <p
                            className='text-sm py-3 bg-white rounded-sm px-1 my-4 border-l-4 border-emerald-400 text-gray-700 md:text-md z-30'
                        >
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </section>
)


export default Illustration;