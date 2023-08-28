import './product.css';
import { UseStateValue} from './StateProvider';

function product ({Id, Title, Price, Rating, Image }){
    const [state, dispatch]  = UseStateValue(); 
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                Id: Id,
                Image: Image,
                Price: Price,
                Rating: Rating

            },
        });
    };

    return (
        <div>
            <div className='product'>
                <div className='product_info'>
                    <p>{Title}</p>
                    <p className='product_price'>
                        <small>$</small>
                        <strong>{Price}</strong>
                    </p>
                    <div className='product_rating'>
                        {Array(Rating)
                        .fill()
                        .map((item) => (
                            <p>⭐</p>
                        ))}
                        </div>
                </div>
                <img src = {Image} alt=''/>

                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    );
}

export default product