import styles from '../style';
import { productItems} from '../constants'

const Illustration = ({toggle,setToggle}) =>(

        <section id='product' className={`flex flex-col w-full md:h-[600px] justify-center items-center md:flex-row `}>

            {productItems.map((item,index) =>(
                <div className='flex-1 flex flex-col p-4 w-full h-[500px] bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 m-2 justify-start items-center drop-shadow-sm rounded-lg relative z-30' key={index}>
                    <div
                        className='absolute p-4 h-[400px] w-full top-0 left-0 opacity-50 bg-white z-20'>
                    </div>

                    <img src={`${item.img}`} alt="illustration"
                    className='h-45 w-45 md:h-36 md:w-36 z-30 '
                    />
                        
                    <h1 className='text-emerald-500 text-2xl text-center text-bold p-4 my-4 rounded-lg md:text-3xl md:min-h-[140px] z-30'>
                            {item.title}
                    </h1>
                    <p
                        className='text-sm py-3 bg-white rounded-sm px-1 my-4 border-l-4 border-emerald-400 text-gray-700 md:text-md z-30'
                    >
                        {item.desc}
                    </p>
                </div>
            ))}
        </section>
)


export default Illustration;