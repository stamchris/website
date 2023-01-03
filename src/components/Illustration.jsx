import styles from '../style';
import { productItems} from '../constants'

const Illustration = () =>(

        <section className='flex flex-col w-full md:h-[600px] justify-center items-center md:flex-row'>

            {productItems.map((item,index) =>(
                <div className='flex-1 flex flex-col p-4 w-full h-full bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 m-2 justify-start items-center drop-shadow-sm rounded-lg ' key={index}>
                    <img src={`${item.img}`} alt="illustration"
                    className='h-45 w-45 md:h-36 md:w-36'
                    />
                    <h1 className='text-emerald-500 text-2xl text-center text-bold p-4 my-4 rounded-lg md:text-3xl md:min-h-[140px]'>
                            {item.title}
                    </h1>
                    <p
                        className='text-sm py-3 px-1 my-4 border-l-4 border-emerald-400 text-gray-700 md:text-md '
                    >
                        {item.desc}
                    </p>
                </div>
            ))}
        </section>
)


export default Illustration;