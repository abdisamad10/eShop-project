import React from 'react';
import './Home.css';
import Product from './product';

function Home () {
    return (
      <>
            <div className='home'>
            <div className='home_container'>

                <img src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg' alt='' 
                className='home_image'/>

                <div className='home_row'>
                    <Product 
                    Id = "123321"
                    Title="Bannet Mystic 15.5 inch Laptop Shoulder Messager Sling Office Bag, Water repellennt 
                    Fabric for Men and Woman (Blue) and you can get different colors in here"
                    Price = {11.99}
                    Rating = {5}
                    Image = "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                    /> 
                    <Product
                    Id= "213132"
                    Title = "his model heats up fast and cooks evenly, and we love its high-capacity cooking area Convection: Can be used for baking along with grilling, "
                    Price = {35}
                    Rating = {4}
                    Image = "https://detec.in/cdn/shop/products/2_56f96d11-8134-49ed-9cc5-d2cba120aca3.jpg?v=1634110082"
                     />
                </div>
                    
                <div className='home_row' >
                    <Product 
                    Id= "321123"
                    Title ="Buy All the Light We Cannot See: The Breathtaking World Wide"
                    Price = {15}
                    Rating ={5}
                    Image = "https://m.media-amazon.com/images/I/81ai1wWKL1L._AC_UF894,1000_QL80_.jpg"
                    />
                    <Product 
                    Id ="4322343"
                    Title = "Echo Studio | Our best-sounding smart speaker ever - With Dolby Atmos, spatial audio processing technology"
                    Price = {84}
                    Rating ={5}
                    Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSOWF0AqLK64kymUr12vEn31h_wYGWTQ4zQ&usqp=CAU"
                    />
                    <Product 
                     Id= "543453"
                     Title= "Apple - 11-Inch iPad Pro with Wi-Fi - 128GB - Space Gray"
                     Price={25}
                     Rating={4}
                     Image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4265/4265400_sd.jpg"
                    />
               </div>

               <div className='home_row'>
               <Product
               Id= "654654"
               Title= "49 ігровий монітор серії CHG90 C49HG90DMN"
               Price={804}
               Rating={5}
               Image="https://images.samsung.com/is/image/samsung/ua-c49hg90-lc49hg90dmnxza-frontblack-77686542?$650_519_PNG$"
               />
              </div>

            </div>

            </div>
        </>
    );
}

export  default Home