import './product.css';

function product ({Id, Title, Price, Rating, Image }){
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

                <button>Add to Basket</button>
            </div>
        </div>
    );
}

export default product