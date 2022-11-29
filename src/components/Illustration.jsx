import styles from '../style';
import { productItems} from '../constants'


const Illustration = () =>(

        <section className='flex flex-col w-full justify-center items-center'>

            {productItems.map((item,index) =>(
                <div className='flex-1 flex flex-col p-4 bg-gradient-to-b from-emerald-200 via-emerald-50 to-slate-50 m-2 justify-center items-center drop-shadow-sm rounded-lg' key={index}>
                    <img src={`/src/assets/illustration_${index+1}.png`} alt="illustration"
                    className='h-45 w-45'
                    />
                    <h1 
                        className='text-3xl text-bold p-4 my-4 rounded-lg'
                    >
                        {item.title}
                    </h1>
                    <p
                        className='text-md p-2 my-4 border-l-4 border-emerald-400 text-gray-700'
                    >
                        {item.desc}</p>
                </div>
            ))}
        </section>
)


export default Illustration;