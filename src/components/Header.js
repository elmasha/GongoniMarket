import React from 'react'
import  {ParallaxProvider}  from 'react-scroll-parallax';
// import {OwlCarousel} from  'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';



const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};



export const Header = () => {
    return (
     
        <ParallaxProvider className="custom-class" y={[-20, 20]} tagOuter="figure">
          {/* <OwlCarousel  className='owl-theme' {...options}> </OwlCarousel>   <div class='item'>
                <h4>1</h4>
            </div>
            <div class='item'>
                <h4>2</h4>
            </div>
            <div class='item'>
                <h4>2</h4>
            </div>
            <div class='item'>
                <h4>2</h4>
            </div>  */}
           
            <img src='./photoheader.jpg' alt ='photo' width='100%' />
           
        </ParallaxProvider>
      

    )
}
