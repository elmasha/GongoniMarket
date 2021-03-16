import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';

export const Header = () => {
    return (
    
        <ParallaxProvider className="custom-class" y={[-20, 20]} tagOuter="figure">
            <img src='./photoheader.jpg' alt ='photo' width='100%' />
        </ParallaxProvider>

    )
}
