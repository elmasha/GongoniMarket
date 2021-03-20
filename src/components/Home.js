import React,{useEffect} from 'react'
import '../css/Home.css'
import { Navbar } from './Navbar'
import { Products } from './Products'
import { Header } from './Header'
import {LatestProducts} from './LatestProducts'
import {useHistory} from 'react-router-dom'
import {auth} from '../config/Config'
import { Footer } from './Footer'


export const Home = ({ user }) => { 
    const history = useHistory();
    useEffect(()=>{
      auth.onAuthStateChanged(user =>{
        if(!user){
            history.push('/login');
        } 
      })
    });

    return (
        <div  className="wrapper">
          <Navbar user={user}/>
          <Header/>
          <LatestProducts/>
          <Products/>
          <Footer/>  
        </div>
    )
}
