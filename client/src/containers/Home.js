import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactTypingEffect from 'react-typing-effect';

const Home = () => {
    return(
       <div className="background">

            <Header />
            <div className="container text-center">
                <div className="home">
                <ReactTypingEffect text={['Welcome to My World']} typespeed={80} startdelay={150} className="typingeffect text-light" /> 
                </div> 
            </div>
            
            <Footer Company= "DATA " Email= "phanit.su@ku.th"/>
        </div>
            
    )
}

export default Home;