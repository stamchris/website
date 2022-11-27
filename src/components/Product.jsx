import styles from '../style';
import { illustration_2,illustration_football,illustration_payment } from '../assets';

const Product = () =>(

        <section className='flex flex-col w-full justify-center items-center'>
            <div className="flex-1">
                <img src={illustration_football} alt="" srcset="" />
            </div>
            <div className="flex-1">
                <img src={illustration_2} alt="second illustration" />
            </div>
            <div className="flex-1">
                <img src={illustration_payment} alt="" srcset="" />
            </div>
        </section>

)


export default Product;